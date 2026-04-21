"use client";

import * as React from "react";
import {
  Bot,
  Briefcase,
  Building2,
  ChevronDown,
  Crown,
  Folder,
  GraduationCap,
  Headphones,
  Inbox,
  LayoutDashboard,
  ListChecks,
  MessagesSquare,
  Plus,
  Repeat,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
  Wrench,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const work = [
  { title: "Issues", icon: ListChecks },
  { title: "Routines", icon: Repeat },
  { title: "Goals", icon: Target },
];

const projects = [
  { title: "OplaGO", color: "text-primary" },
];

const agents = [
  { title: "CEO", icon: Crown },
  { title: "CoS", icon: UserCog },
  { title: "Community", icon: MessagesSquare },
  { title: "Customer Success", icon: Headphones },
  { title: "Engineering", icon: Wrench },
  { title: "Sales", icon: TrendingUp },
  { title: "QA Engineer", icon: GraduationCap },
  { title: "Senior Engineer", icon: Sparkles },
  { title: "Staff Engineer", icon: Bot },
];

const company = [
  { title: "Org", icon: Building2 },
  { title: "Skills", icon: Briefcase },
  { title: "Board", initials: "BO" },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="gap-2 pb-2">
        {/* Brand row — hidden in icon-rail */}
        <div className="flex items-center justify-between gap-2 px-2 pt-1 group-data-[collapsible=icon]:hidden">
          <button className="group flex items-center gap-1.5 rounded-md px-1.5 py-1 text-sm font-semibold text-sidebar-foreground hover:bg-sidebar-accent">
            <span className="text-white">OplaCRM</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
          </button>
          <button
            aria-label="Search"
            className="flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-white"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Brand mark — shown only in icon-rail */}
        <div className="hidden items-center justify-center pt-1 group-data-[collapsible=icon]:flex">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
            O
          </span>
        </div>

        {/* New Issue — uses SidebarMenuButton so it auto-collapses */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="New Issue"
              className="bg-sidebar-accent font-medium text-white hover:bg-sidebar-accent/80 active:bg-sidebar-accent/80"
            >
              <Plus />
              <span>New Issue</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-1">
        {/* Top */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive aria-current="page">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Inbox />
                  <span>Inbox</span>
                </SidebarMenuButton>
                <SidebarMenuBadge>1</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Work */}
        <SidebarGroup>
          <SidebarGroupLabel>Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {work.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction aria-label="Add project">
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((p) => (
                <SidebarMenuItem key={p.title}>
                  <SidebarMenuButton tooltip={p.title}>
                    <Folder className={p.color} />
                    <span>{p.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Agents */}
        <SidebarGroup>
          <SidebarGroupLabel>Agents</SidebarGroupLabel>
          <SidebarGroupAction aria-label="Add agent">
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {agents.map((a) => (
                <SidebarMenuItem key={a.title}>
                  <SidebarMenuButton>
                    <a.icon />
                    <span>{a.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Company */}
        <SidebarGroup>
          <SidebarGroupLabel>Company</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {company.map((c) => (
                <SidebarMenuItem key={c.title}>
                  <SidebarMenuButton tooltip={c.title}>
                    {"icon" in c && c.icon ? (
                      <c.icon />
                    ) : (
                      <span
                        aria-hidden
                        className="grid size-4 shrink-0 place-items-center rounded-full bg-primary/20 text-[8px] font-semibold tracking-tight text-primary"
                      >
                        {c.initials}
                      </span>
                    )}
                    <span>{c.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
