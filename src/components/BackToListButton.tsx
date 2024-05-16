/**
 * BackToListButton component renders a button that navigates the user back to the previous page when clicked.
 *
 * @component
 * @example
 * Usage example: <BackToListButton />
 */

'use client';

import { useRouter } from 'next/navigation';

export default function BackToListButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      className="p-2 border border-stone-700 rounded-lg hover:bg-stone-700"
      onClick={handleGoBack}
    >
      Back to List
    </button>
  );
}
