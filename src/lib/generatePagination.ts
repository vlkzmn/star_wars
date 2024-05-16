/**
 * Generates pagination array based on the current page and total number of pages.
 *
 * @param {number} currentPage - The current active page.
 * @param {number} totalPages - The total number of pages.
 * @returns {Array<number|string>} An array representing the pagination elements.
 */

export const generatePagination = (
  currentPage: number,
  totalPages: number
): Array<number | string> => {
  // If total pages are less than or equal to 7, return an array with all page numbers
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If current page is less than 3, show first 3 pages, '...' and last 3 pages
  if (currentPage < 3) {
    return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If current page is 3, show first page, next 3 pages, '...' and last 2 pages
  if (currentPage === 3) {
    return [
      1,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages - 1,
      totalPages,
    ];
  }

  // If current page is greater than total pages minus 2, show first 3 pages, '...' and last 3 pages
  if (currentPage > totalPages - 2) {
    return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If current page is total pages minus 2, show first and second pages, '...', previous page, current page, next page, and last page
  if (currentPage === totalPages - 2) {
    return [
      1,
      2,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      totalPages,
    ];
  }

  // Otherwise, show first page, '...', previous page, current page, next page, '...', and last page
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
