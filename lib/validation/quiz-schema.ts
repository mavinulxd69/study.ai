/**
 * Validation schemas using Zod
 */
import { z } from "zod";

export const languageSchema = z.enum(["en", "bn"]);

export const quizQuestionSchema = z.object({
  id: z.string().default(() => Math.random().toString(36).substring(2, 9)),
  question: z.string().min(5, "Question must be at least 5 characters"),
  question_type: z.enum(["mcq", "true_false"]).default("mcq"),
  options: z.array(
    z.object({
      id: z.string(),
      text: z.string().min(1, "Option text cannot be empty"),
    })
  ).min(2, "Must provide at least 2 options"),
  correct_option_id: z.string(),
  explanation: z.string().min(5, "Explanation required"),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  source_reference: z.string().optional(),
});

export const quizGenerationSchema = z.object({
  title: z.string().min(3),
  subject: z.string().optional(),
  language: languageSchema.default("en"),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  questions: z.array(quizQuestionSchema).min(1, "Must generate at least 1 question"),
});

export type QuizGenerationOutput = z.infer<typeof quizGenerationSchema>;
