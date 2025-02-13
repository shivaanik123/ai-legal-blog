import React, { useState } from 'react';

export default function Summarizer() {
  const [caseName, setCaseName] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    setLoading(true);
    setSummary("");

    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseName }),
    });

    const data = await response.json();
    setSummary(data.summary);
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Legal Case Summarizer</h1>
      <input
        type="text"
        value={caseName}
        onChange={(e) => setCaseName(e.target.value)}
        className="border p-2 w-full mb-4"
        placeholder="Enter a legal case name"
      />
      <button
        onClick={handleSummarize}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {loading ? "Summarizing..." : "Get Summary"}
      </button>

      {summary && (
        <div className="mt-4 p-4 bg-gray-100 border">
          <h2 className="text-lg font-bold">Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
