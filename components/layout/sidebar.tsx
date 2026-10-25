"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  UploadCloud,
  FileText,
  BotMessageSquare,
  HelpCircle,
  Layers,
  LineChart,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const mainNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Subject Library",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    title: "Upload Materials",
    href: "/upload",
    icon: UploadCloud,
    badge: "OCR & PDF",
  },
  {
    title: "Study Notes",
    href: "/materials",
    icon: FileText,
  },
  {
    title: "AI Personal Tutor",
    href: "/tutor",
    icon: BotMessageSquare,
    badge: "EN/BN",
  },
  {
    title: "MCQ Quizzes",
    href: "/quizzes",
    icon: HelpCircle,
  },
  {
    title: "Flashcards",
    href: "/flashcards",
    icon: Layers,
  },
  {
    title: "Learning Progress",
    href: "/progress",
    icon: LineChart,
  },
];

const secondaryNavItems: NavItem[] = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out select-none",
        collapsed ? "w-18" : "w-64",
        className
      )}
    >
      {/* Brand header */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border/80">
        <Link
          href="/dashboard"
          className={cn("flex items-center gap-2.5 overflow-hidden", collapsed && "justify-center")}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            <BookOpen className="h-4.5 w-4.5" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-foreground">
                Study<span className="text-primary">AI</span>
              </span>
              <span className="text-[10px] text-muted-foreground -mt-0.5 font-medium">
                Workspace
              </span>
            </div>
          )}
        </Link>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "hidden lg:flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
            collapsed && "mx-auto mt-2"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className={cn("px-2 pb-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase", collapsed && "sr-only")}>
          Study Tools
        </div>
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.title : undefined}
            >
              <Icon className={cn("h-4.5 w-4.5 shrink-0", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
              {!collapsed && (
                <div className="flex flex-1 items-center justify-between overflow-hidden">
                  <span className="truncate">{item.title}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        "ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-secondary text-muted-foreground border border-border/60"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}

        <div className={cn("pt-5 px-2 pb-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase", collapsed && "sr-only")}>
          Preferences
        </div>
        {secondaryNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.title : undefined}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && <span className="truncate">{item.title}</span>}
            </Link>
          );
        })}
      </div>

      {/* Pro / Help card when expanded */}
      {!collapsed && (
        <div className="p-3 m-3 rounded-xl border border-primary/20 bg-primary/5 text-card-foreground">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI Study Assistant</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-normal">
            Upload notes, solve doubts in Bangla & English, and practice tests.
          </p>
        </div>
      )}
    </aside>
  );
}
