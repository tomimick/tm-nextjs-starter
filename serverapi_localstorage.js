
/* ServerAPI mockup - backed by localStorage for demo purposes only.
 *
 * Not efficient for large data because of localStorage limitations.
 */

import axios from "axios"

const KEY = "movies";


class LocalStorageAPI {

    constructor() {
    }

    query_movies() {
        return new Promise((resolve, reject) => {

            //localStorage.removeItem("movies") // to remove all

            var value = localStorage.getItem(KEY);

            if (!value) {
                // load initial data
                let url = "/static/exampledata/movies.json";
                axios.get(url)
                    .then(reply => {
                        localStorage.setItem(KEY, JSON.stringify(reply.data));
                        resolve(reply.data);
                    });
            } else {
                let data = JSON.parse(value);
                resolve(data);
            }
        })
    }

    get_movie(id) {
        return new Promise((resolve, reject) => {

            id = parseInt(id);

            var value = localStorage.getItem(KEY);
            let data = JSON.parse(value) || [];

            // search for id
            for (const x of data) {
                if (x.id == id) {
                    resolve(x);
                    return;
                }
            }

            reject();
        });
    }

    save_movie(item) {
        return new Promise((resolve, reject) => {

            var value = localStorage.getItem(KEY);
            let moviearray = JSON.parse(value);

            if (!item.id) {
                // create object
                const seconds = Math.floor(Date.now() / 1000);
                item.id = seconds;
                moviearray.push(item);
            } else {
                // edit object
                for (const x of moviearray) {
                    if (x.id == item.id) {
                        x.title = item.title;
                        x.director = item.director;
                    }
                }
            }

            localStorage.setItem(KEY, JSON.stringify(moviearray));
            resolve(item);
        })
    }

    delete_movie(id) {
        return new Promise((resolve, reject) => {
            id = parseInt(id);

            var value = localStorage.getItem(KEY);
            let moviearray = JSON.parse(value);

            moviearray = moviearray.filter(item => item.id !== id)

            localStorage.setItem(KEY, JSON.stringify(moviearray));
            resolve();
        })
    }
}

// export singleton object
const api_mockup = new LocalStorageAPI();
export default api_mockup;

