import { ref } from '../refElement';

const getMaxVisualPages = () => {
  const ScreenWidth = window.screen.width;

  if (ScreenWidth < 420) {
    return 1;
  }

  if (ScreenWidth < 520) {
    return 2;
  }

  if (ScreenWidth < 620) {
    return 3;
  }

  if (ScreenWidth < 720) {
    return 4;
  }

  return 5;
};

export const drawPagination = (totalPages, currentPage) => {
  const arrayPages = [];
  const maxVisuallyPages = getMaxVisualPages();

  for (let i = 1; i <= totalPages; i++) {
    arrayPages.push(i);
  }

  const arrayVisuallyPages = arrayPages.slice(
    currentPage - 1,
    maxVisuallyPages + currentPage
  );

  const li = arrayVisuallyPages.map((page, index) => {
    if (page === currentPage) {
      return `
      <li class="pagination__list-li pagination__li-selected" data-value=${page}>${page}</li>
      `;
    }

    if (index === arrayVisuallyPages.length - 1) {
      return `
      <li class="pagination__list-li" data-value=${page}>${page}</li>
      <li class="pagination__list-li">...</li>
      <li class="pagination__list-li" data-value=${totalPages}>${totalPages}</li>
      `;
    }

    return `
    <li class="pagination__list-li" data-value=${page}>${page}</li>
    `;
  });

  ref.paginationList.innerHTML = li.join('');
};

const unselectPaginationActivePage = () => {
  document
    .querySelector('.pagination__li-selected')
    .classList.remove('pagination__li-selected');
};

export const selectPaginationActivePage = countPage => {
  unselectPaginationActivePage();

  document
    .querySelector(`[data-value="${countPage}"]`)
    .classList.add('pagination__li-selected');
};
