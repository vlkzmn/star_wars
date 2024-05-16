/**
 * Error Display Component
 *
 * This component displays an error message and provides a button for retrying.
 *
 * @param {Object} props - The component props
 * @param {Error} props.error - The error object to be displayed
 * @param {function} props.reset - Function to reset state and retry
 * @returns {JSX.Element} Element displaying the error message and "Try again" button
 */

'use client';

import { useEffect } from 'react';
import Logo from '@/components/Logo';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-10 min-h-screen p-6">
      <Logo />

      <h1 className="text-stone-400">Something went wrong!</h1>
      <button
        type="button"
        className="px-4 py-2 text-sm text-white rounded-md border border-stone-700 transition-colors hover:bg-stone-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
