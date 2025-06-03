// app/categories/add/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Category } from '../../types';

export default function AddCategoryPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return alert('All fields are required.');

    const newCategory: Omit<Category, 'id'> = { name, description };

    await fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify(newCategory),
    });

    router.push('/categories');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Add New Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Category Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring focus:border-blue-400"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Category
        </button>
      </form>
    </div>
  );
}
