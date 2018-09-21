
/* Page to edit a movie.
 *
 * A regular form with 2 fields and a button.
 *
 * Only local data, no store access.
 */

import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import api from "../config"


export default class MovieEditView extends React.Component {

    // query params to props
    static getInitialProps ({query:{id}}) {
        return {id};
    }

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onBack = this.onBack.bind(this);

        this.state = {movie: {title:"", director:"", id:""}, oldtitle:""};
    }

    componentDidMount() {
        console.info("MovieEditView did mount" + this.props.id);

        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        if (movie_id) {
            // editing, load the movie
            api.get_movie(movie_id).then(d => {
                this.setState({movie: d, oldtitle:d.title});
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.movie.title)
            return;

        // save the data and go to front page
        api.save_movie(this.state.movie)
                .then(reply => Router.push('/'))
                .catch(error => alert("Error occurred"));
    }

    onInputChange(e) {
        // grab the changes into data
        const {name, value} = e.target;
        let movie = {...this.state.movie, [name]: value};
        this.setState({movie});
    }

    onBack(e) {
        e.preventDefault();
        Router.back();
    }

    render () {
        const title = this.props.id ? 'Edit '+this.state.oldtitle
            : 'Add a new movie';

        return (

            <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>

            <h2>{title}</h2>

            <form onSubmit={this.onSubmit}>
            <div>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.movie.title}
                onChange={this.onInputChange} autoFocus autoComplete="off" />
            </div>
            <div>
            <label>Director:</label>
            <input type="text" name="director" value={this.state.movie.director}
                onChange={this.onInputChange} autoComplete="off" />
            </div>

            <a href="#" className="but back" onClick={this.onBack}>Back</a>

            <button type="submit">Save</button>
            </form>

            </React.Fragment>
        )
    }
}

