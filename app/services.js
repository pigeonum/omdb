export function searchMovies(page, callback) {
    var searchTerm = $$("search_field").getValue();
    if (!searchTerm) return;

    var apiUrl = `https://d5dolrh5jbagv84msssd.apigw.yandexcloud.net/api/?s=${encodeURIComponent(searchTerm)}&page=${page}`;

    webix.ajax().get(apiUrl, function (text) {
        var data = JSON.parse(text);
        if (data && data.Search) {
            $$("movie_table").parse(data.Search);
            callback(data.totalResults);
        } else if (data && data.Response === "False") {
            showPopup(data.Error);
            callback(0);
        }
    });
}

function showPopup(message) {
    webix.message({
        text: message,
        type: "error",
        expire: 5000,
        position: "top-right"
    });
}
