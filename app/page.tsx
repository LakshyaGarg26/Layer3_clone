// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Layer3 Clone</h1>
      <p>This is the homepage. Navigate to the quests page to see the quests.</p>
      <Link href="/quests" className="text-blue-500 underline">
        Go to Quests
      </Link>
    </div>
  );
}
