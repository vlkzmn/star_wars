/**
 * Home Page Component
 *
 * This component represents a page displaying a list of characters fetched from an API.
 * It includes a logo, a list of characters, and pagination.
 *
 * @param {Object} props - The props of the component.
 * @param {Object} props.searchParams - The search parameters, including the page number.
 * @returns {JSX.Element} - The JSX markup for the component.
 */

import { Suspense } from 'react';
import Logo from '@/components/Logo';
import CardsListSkeleton from '@/components/Skeletons';
import СharactersList from '@/components/СharactersList';
import Pagination from '@/components/Pagination';
import { getFirstPage } from '@/lib/fetchData';
import { CharactersResponse } from '@/types/Character';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  // Extract the current page number from the search parameters or set it to 1
  const currentPage = Number(searchParams?.page) || 1;

  // Fetch data for the first page of characters
  const firstPageData: CharactersResponse = await getFirstPage();

  // Calculate the total number of pages based on the total count of characters and the number of characters per page
  const totalPages = Math.ceil(
    firstPageData.count / firstPageData.results.length
  );

  return (
    <main className="flex flex-col items-center gap-10 min-h-screen p-6">
      <Logo />

      {/* Suspense component to handle loading state while fetching characters data */}
      <Suspense key={currentPage} fallback={<CardsListSkeleton />}>
        <СharactersList
          currentPage={currentPage}
          firstList={firstPageData.results}
        />
      </Suspense>

      {/* Pagination component to navigate between pages */}
      <div className="flex justify-center w-full">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </main>
  );
}
