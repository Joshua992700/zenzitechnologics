import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"

const services = [
  "Product Photography",
  "Poster Creation",
  "Logo Design",
  "Digital Marketing",
  "Photo Video Editing",
  "Web & App Development",
  "B2B Marketing",
  "UI UX Design"
]

export function ServicesSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {services.map((service) => (
                <SidebarMenuItem key={service}>
                  <SidebarMenuButton asChild>
                    <Link href={`/requests/${service.toLowerCase().replace(/ /g, '-')}`}>
                      {service}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

