import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">AI & Legal Tech Blog</h1>
      <p className="text-lg text-gray-600 mb-6">
        Exploring the intersection of AI and law: regulations, case studies, and expert insights.
      </p>
      <Link href="/blog">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Read Articles
        </button>
      </Link>
    </div>
  );
}
