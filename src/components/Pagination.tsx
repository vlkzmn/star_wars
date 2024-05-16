'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { generatePagination } from '../lib/generatePagination';

/**
 * Pagination component renders a pagination control for navigating through pages.
 *
 * @component
 * @param {Object} props - The component props
 * @param {number} props.totalPages - The total number of pages
 * @param {number} props.currentPage - The current active page
 * @returns { undefined | JSX.Element} The rendered pagination component or undefined
 */

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}): undefined | JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allPages = generatePagination(currentPage, totalPages);

  // Creates a URL for a specific page number
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages > 1) {
    return (
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <div key={`${page}${index}`} data-testid="button">
                <PaginationNumber
                  href={createPageURL(page)}
                  page={page}
                  position={position}
                  isActive={currentPage === page}
                />
              </div>
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    );
  }
}

/**
 * PaginationNumber component renders a single page number button or an ellipsis.
 *
 * @component
 * @param {Object} props - The component props
 * @param {number | string} props.page - The page number or ellipsis
 * @param {string} props.href - The URL for the page number
 * @param {'first' | 'last' | 'middle' | 'single'} [props.position] - The position of the page number in the pagination control
 * @param {boolean} props.isActive - Whether the page number is the active page
 * @returns {JSX.Element} The rendered page number button or ellipsis
 */

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}): JSX.Element {
  const className = clsx(
    'flex ss:h-10 ss:w-10 h-8 w-8 items-center justify-center text-sm border border-stone-900',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-stone-900 border-stone-900 text-white': isActive,
      'hover:bg-stone-900': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    }
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

/**
 * PaginationArrow component renders a pagination arrow button.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.href - The URL for the arrow button
 * @param {'left' | 'right'} props.direction - The direction of the arrow
 * @param {boolean} [props.isDisabled] - Whether the arrow button is disabled
 * @returns {JSX.Element} The rendered arrow button
 */

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}): JSX.Element {
  const className = clsx(
    'flex ss:h-10 ss:w-10 h-8 w-8 items-center justify-center rounded-md border border-stone-900',
    {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-stone-900': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    }
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
