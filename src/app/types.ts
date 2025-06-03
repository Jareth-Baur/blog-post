// types.ts

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  categoryId: string; // ✅ new field
  date: string;
}
// types.ts
export interface Category {
  id: string;
  name: string;
  description: string;
}
