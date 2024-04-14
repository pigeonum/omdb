import { searchMovies } from './services.js';

let currentPage = 1;
let totalPages = 0;
export { currentPage, totalPages };

export function onSearchClick() {
    currentPage = 1;
    $$("movie_table").clearAll();
    searchMovies(currentPage, updatePageInfo);
}

export function onNextPageClick() {
    if (currentPage < totalPages) {
        currentPage++;
        searchMovies(currentPage, updatePageInfo);
    }
}


function updatePageInfo(totalResults) {
    totalPages = Math.ceil(totalResults / 10);
    $$("page_info").setHTML(`Page ${currentPage} of ${totalPages}`);
}
