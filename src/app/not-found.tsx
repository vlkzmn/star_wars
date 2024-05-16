/**
 * NotFound Component
 *
 * This component represents the page displayed when the requested page is not found.
 * It includes a logo and a message indicating that the requested page could not be found.
 */

import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-10 min-h-screen p-6">
      <Logo />

      <h1 className="text-stone-400">Could not find the requested page</h1>
    </main>
  );
}
