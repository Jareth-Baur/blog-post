// app/categories/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Category } from '../types';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Categories</h1>
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories found.</p>
      ) : (
        <ul className="space-y-3">
          {categories.map(category => (
            <li key={category.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-sm transition">
              <h2 className="font-semibold text-lg text-gray-900">{category.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{category.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
