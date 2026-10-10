import { redirect } from 'next/navigation';

// Surfari's home is the game itself.
export default function Home() {
  redirect('/surfari');
}
