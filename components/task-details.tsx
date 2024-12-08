import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TaskDetailsProps {
  task: any // Replace 'any' with a more specific type based on your Supabase schema
  onMarkAsDone: () => void
}

export function TaskDetails({ task, onMarkAsDone }: TaskDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.product_type || "Task Details"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold">Contact Information</h3>
            <p>Name: {task.name}</p>
            <p>Email: {task.email}</p>
            <p>Phone: {task.phonenumber}</p>
            {task.company_name && <p>Company: {task.company_name}</p>}
            {task.industry && <p>Industry: {task.industry}</p>}
            {task.bussiness_website && <p>Website: {task.bussiness_website}</p>}
          </div>
          <div>
            <h3 className="font-semibold">Task Information</h3>
            <p>Product Type: {task.product_type}</p>
            <p>Count: {task.count}</p>
            <p>Preferred Style: {task.preferred_style}</p>
            <p>Additional Info: {task.additional_info}</p>
          </div>
          <Button onClick={onMarkAsDone}>Mark as Done</Button>
        </div>
      </CardContent>
    </Card>
  )
}