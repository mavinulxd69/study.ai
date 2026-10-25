import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  UploadCloud,
  BotMessageSquare,
  FileText,
  HelpCircle,
  Layers,
  LineChart,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const coreFeatures = [
    {
      title: "Screenshot & PDF to Notes",
      description:
        "Upload textbook photos, handwritten notes, and PDF chapters. AI extracts text, preserves formulas, and generates chapter notes.",
      icon: UploadCloud,
      badge: "Vision AI",
    },
    {
      title: "Bilingual AI Personal Tutor",
      description:
        "Ask difficult study questions with step-by-step reasoning in simple Bangla, English, or mixed language.",
      icon: BotMessageSquare,
      badge: "EN / BN",
    },
    {
      title: "Interactive MCQ & Quiz Generator",
      description:
        "Instantly convert study materials into topic-wise multiple-choice and true/false practice exams with detailed explanations.",
      icon: HelpCircle,
      badge: "Instant Evaluation",
    },
    {
      title: "Flashcards & Active Recall",
      description:
        "Master formulas, definitions, and high-yield concepts with flip flashcards and spaced revision.",
      icon: Layers,
      badge: "Active Recall",
    },
    {
      title: "Comprehensive Revision Sheets",
      description:
        "Generate short summaries, key definitions, and formula cheat sheets before exams.",
      icon: FileText,
      badge: "Exam Prep",
    },
    {
      title: "Honest Learning Analytics",
      description:
        "Track quiz performance over time, identify weak topics, and see genuine study milestones.",
      icon: LineChart,
      badge: "Analytics",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-xs px-3.5 py-1 text-xs font-medium text-foreground mb-6 shadow-xs">
              <Badge variant="accent" className="text-[10px] py-0 px-1.5">
                Stage 1 Foundation Ready
              </Badge>
              <span className="text-muted-foreground">
                Design system, tokens & architecture initialized
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              Study Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-accent">
                Understand Everything.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform screenshots, PDFs, and textbook chapters into clear explanations,
              personalized study notes, and verified practice quizzes in Bangla and English.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2 shadow-md">
                  Open Learning Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/subjects">
                <Button variant="outline" size="lg">
                  Explore Subjects
                </Button>
              </Link>
            </div>

            {/* Micro proof points */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Bangla & English Explanations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Formula & LaTeX Math Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Verified MCQ Scoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid Preview */}
        <section className="py-16 bg-secondary/30 border-y border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                All-in-One AI Learning Suite
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Engineered specifically for school and college students preparing for examinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <Card key={feat.title} className="hover:shadow-md transition-all duration-200 border-border/80 bg-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="text-[10px]">
                          {feat.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{feat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs">
                        {feat.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
