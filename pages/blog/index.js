import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">AI & Legal Tech Blog</h1>
      <p className="text-lg text-gray-600 mb-6">Exploring AI regulations, ethics, and case studies.</p>

      <ul className="space-y-4">
        <li className="border-b pb-2">
          <Link href="/blog/summarizer">
            <span className="text-xl text-blue-500 hover:underline">AI Legal Case Summarizer</span>
          </Link>
        </li>
      </ul>

      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

