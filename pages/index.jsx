
/* The home page.
 *
 * Loads and displays the movie list.
 */

import React from 'react'
import { observer } from "mobx-react"

import Link from 'next/link'

import store from "../store"
import api from "../serverapi"


class About extends React.Component {

    componentDidMount() {
        console.info("index did mount");

        // query movies and put into store, whenever this page gets activated
        api.query_movies().then(movies => store.set_movies(movies));
    }

    render () {
        return (
            <React.Fragment>
            <h2>List of movies</h2>

            <ol>
            {store.movielist.map(movie => (
                <li key={movie.id}>
                    <Link href={"/moviedetails?id="+movie.id}>
                        <a>{movie.title}</a></Link>
                    by {movie.director || 'Unknown' }
                </li>
            ))}
            </ol>

            <Link href="/movieedit"><a>Add a new movie</a></Link>
            </React.Fragment>
        )
    }
}

// mark as mobx observer
export default observer(About);

// debug in console
//window.store = store;

