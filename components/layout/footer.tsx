"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-card/50 text-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                <BookOpen className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Study<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Learn Smarter. Understand Everything. Transform screenshots, PDFs, and textbooks into smart revision notes and practice quizzes.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/upload" className="hover:text-foreground transition-colors">
                  Screenshot & PDF Analyzer
                </Link>
              </li>
              <li>
                <Link href="/tutor" className="hover:text-foreground transition-colors">
                  AI Personal Tutor
                </Link>
              </li>
              <li>
                <Link href="/quizzes" className="hover:text-foreground transition-colors">
                  MCQ Quiz Generator
                </Link>
              </li>
              <li>
                <Link href="/flashcards" className="hover:text-foreground transition-colors">
                  Revision Flashcards
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Supported Subjects
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Physics & Chemistry</li>
              <li>Higher Mathematics & Biology</li>
              <li>ICT & Computer Science</li>
              <li>Bangla & English Medium Curriculum</li>
            </ul>
          </div>

          {/* Security & System */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Privacy & Trust
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your uploaded study materials and notes are stored securely and kept private to your account.
            </p>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {year} StudyAI Learning Platform. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-foreground cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-foreground cursor-pointer">Documentation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
