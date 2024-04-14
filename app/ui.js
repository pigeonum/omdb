import { onSearchClick, onNextPageClick } from './events.js';

export function webixUI() {
    webix.ui({
        rows: [
            {
                view: "toolbar", padding: 3, elements: [
                    { view: "text", id: "search_field", placeholder: "Enter movie name..." },
                    { view: "button", id: "search_button", value: "Search", width: 100, click: onSearchClick }
                ]
            },
            {
                view: "scrollview", scroll: "y", body: {
                    view: "datatable", id: "movie_table", select: true, columns: [
                        { id: "Poster", header: "Poster", fillspace: 1, template: obj => `<img src='${obj.Poster}' style='height:100px;'>` },
                        { id: "Title", header: "Title", fillspace: 3, adjust: "data" },
                        { id: "Year", header: "Year", fillspace: 1 },
                        { id: "Type", header: "Type", fillspace: 1 }
                    ],
                    autoheight: true,
                    autowidth: false,
                    minHeight: 600,
                    datafetch: 10,
                    loadahead: 30
                }
            },
            {
                view: "toolbar", cols: [
                    { view: "label", id: "page_info", label: "Page 1 of X", width: 150 },
                    { view: "button", value: "Next", width: 100, click: onNextPageClick }
                ]
            }
        ]
    });
}
