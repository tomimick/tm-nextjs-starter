
/*
 * Data store, managed by Mobx - https://mobx.js.org
 *
 * Currently just holds our list of movies.
 */

import { observable, computed, action, decorate } from "mobx";
import { onError } from "mobx-react"


class MyStore {

    constructor() {
        this.movielist = [];
    }

    // a property for count
    get count() {
        return this.movielist.length;
    }

    // replace the whole movielist
    set_movies(array) {
        this.movielist = array || [];
    }

    // add a single movie
    add_movie(obj) {
        this.movielist.push(obj);
    }
}

// attach mobx to the store
// (not using decorators since they require extra babel)
decorate(MyStore, {

    // our data
    movielist: observable,
    count: computed,
    // actions
    set_movies: action,
    add_movie: action
});

// log mobx errors
onError(error => {
    console.log(error)
});

// export singleton store
const store = new MyStore();
export default store;

