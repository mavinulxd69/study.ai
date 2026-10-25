import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "StudyAI — Learn Smarter. Understand Everything.",
    template: "%s | StudyAI",
  },
  description:
    "AI-powered learning platform for students. Upload screenshots and PDFs, generate chapter summaries, create MCQ quizzes, ask study questions, and track learning progress.",
  keywords: [
    "AI Tutor",
    "Study Notes",
    "MCQ Generator",
    "Bangla Education",
    "HSC Study",
    "PDF Summarizer",
    "Flashcards",
  ],
  authors: [{ name: "StudyAI Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
