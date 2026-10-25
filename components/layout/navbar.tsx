"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Study<span className="text-primary">AI</span>
              </span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                <Sparkles className="h-2.5 w-2.5" /> Beta
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground hidden sm:inline-block -mt-1 font-medium">
              Understand Everything
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link
            href="/#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/subjects"
            className="hover:text-foreground transition-colors"
          >
            Subjects
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/#faq"
            className="hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="gap-1.5">
              Start Learning
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card px-4 py-5 sm:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-secondary text-foreground"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-secondary text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="/subjects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-secondary text-foreground"
            >
              Subjects
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-secondary text-foreground"
            >
              Dashboard
            </Link>
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-center gap-1.5">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
