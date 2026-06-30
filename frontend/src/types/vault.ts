export type MemoryItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  source: string;
  category: "Notes" | "Documents" | "Ideas" | "Meetings";
  isFavorite?: boolean;
};
