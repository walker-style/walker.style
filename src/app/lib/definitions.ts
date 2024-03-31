export type ResumeItem = {
  id: string;
  type: "education" | "employment" | "volunteer" | "other" | "certification";
  startDate?: string;
  endDate: string | "current";
};
