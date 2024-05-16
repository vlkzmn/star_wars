/**
 * Loading Component
 *
 * This component displays a loading indicator, represented by a Stormtrooper icon,
 * while content is being loaded or processed.
 */

import { Stormtrooper } from '@/components/Stormtrooper';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-32 h-32 bg-stone-900 rounded-lg animate-pulse">
        <Stormtrooper />
      </div>
    </div>
  );
}
