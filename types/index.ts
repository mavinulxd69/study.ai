/**
 * Core type definitions for StudyAI platform
 */

export type Language = "en" | "bn";

export type ExplanationLevel = "beginner" | "intermediate" | "advanced";

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  preferred_language: Language;
  theme_preference: "light" | "dark" | "system";
  created_at: string;
  updated_at: string;
}

export interface Subject {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  is_custom: boolean;
  user_id?: string;
  created_at: string;
}

export interface Chapter {
  id: string;
  subject_id: string;
  title: string;
  chapter_number?: number;
  description?: string;
  created_at: string;
}

export interface Topic {
  id: string;
  chapter_id?: string;
  subject_id: string;
  title: string;
  subtopics?: string[];
  created_at: string;
}

export type MaterialType = "image" | "pdf" | "text_snippet";

export interface StudyMaterial {
  id: string;
  user_id: string;
  subject_id?: string;
  title: string;
  file_url?: string;
  file_name?: string;
  file_size?: number;
  mime_type?: string;
  extracted_text?: string;
  detected_topics?: string[];
  status: "pending" | "processing" | "completed" | "error";
  error_message?: string;
  created_at: string;
  updated_at: string;
}

export type NoteMode =
  | "quick_summary"
  | "detailed_summary"
  | "chapter_notes"
  | "revision_notes"
  | "formula_sheet"
  | "definitions";

export interface StudyNote {
  id: string;
  user_id: string;
  material_id?: string;
  subject_id?: string;
  topic?: string;
  title: string;
  content: string;
  mode: NoteMode;
  language: Language;
  created_at: string;
  updated_at: string;
}

export interface TutorMessage {
  id: string;
  conversation_id: string;
  sender: "user" | "assistant";
  content: string;
  language: Language;
  created_at: string;
}

export interface TutorConversation {
  id: string;
  user_id: string;
  title: string;
  subject_id?: string;
  material_id?: string;
  created_at: string;
  updated_at: string;
}

export type QuestionDifficulty = "easy" | "medium" | "hard";
export type QuestionType = "mcq" | "true_false";

export interface QuizQuestion {
  id: string;
  quiz_id?: string;
  question: string;
  question_type: QuestionType;
  options: {
    id: string;
    text: string;
  }[];
  correct_option_id: string;
  explanation: string;
  difficulty: QuestionDifficulty;
  source_reference?: string;
}

export interface Quiz {
  id: string;
  user_id: string;
  subject_id?: string;
  material_id?: string;
  title: string;
  difficulty: QuestionDifficulty;
  language: Language;
  questions: QuizQuestion[];
  created_at: string;
}

export interface QuizAttempt {
  id: string;
  quiz_id: string;
  user_id: string;
  score: number;
  total_questions: number;
  answers: {
    question_id: string;
    selected_option_id: string;
    is_correct: boolean;
  }[];
  completed_at: string;
}

export interface Flashcard {
  id: string;
  deck_id: string;
  front: string;
  back: string;
  hint?: string;
  is_learned: boolean;
  next_review_at?: string;
  created_at: string;
}

export interface FlashcardDeck {
  id: string;
  user_id: string;
  subject_id?: string;
  title: string;
  cards_count: number;
  created_at: string;
}
