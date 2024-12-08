'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ServicesSidebar } from '@/components/sidebar'
import { TaskDetails } from '@/components/task-details'

export default function RequestsPage() {
  const { service } = useParams()
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    fetchTasks()
  }, [service])
  console.log(service)
  async function fetchTasks() {
    const { data, error } = await supabase
      .from(`${service}`)
      .select('*')

    if (error) {
      console.error('Error fetching tasks:', error)
    } else {
      setTasks(data || [])
    }
  }

  async function markAsDone(taskId: string) {
    const { error } = await supabase
      .from('tasks')
      .update({ is_done: true })
      .eq('id', taskId)

    if (error) {
      console.error('Error marking task as done:', error)
    } else {
      fetchTasks()
    }
  }

  return (
    <div className="flex h-screen">
      <ServicesSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">{service} Requests</h1>
        <div className="grid gap-6">
          {tasks.map((task) => (
            <TaskDetails key={task.id} task={task} onMarkAsDone={() => markAsDone(task.id)} />
          ))}
        </div>
      </main>
    </div>
  )
}

