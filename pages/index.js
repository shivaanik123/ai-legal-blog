import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>AI & Legal Tech Blog</h1>
      <p>Exploring the intersection of AI and law: regulations, case studies, and expert insights.</p>

      <nav>
        <ul>
          <li><Link href="/blog">Go to Blog</Link></li>
          <li><Link href="/summarizer">Try the Summarizer</Link></li>
        </ul>
      </nav>
    </div>
  );
}
