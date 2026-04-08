"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/features/shared/components/ui/sidebar";
import * as Icons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainSideBar({ sections }) {
  //
  const currentPath = usePathname();
  //
  return (
    <Sidebar collapsible="icon" className="relative h-full">
      <SidebarContent className={"font-[Cairo]"}>
        <SidebarGroup>
          <SidebarGroupLabel>Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((s) => {
                const Icon = Icons[s.icon] || Icons.HelpCircle;
                return (
                  <SidebarMenuItem key={s.title}>
                    <SidebarMenuButton asChild isActive={s.url == currentPath}>
                      <Link href={s.url}>
                        <Icon />
                        <span>{s.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
