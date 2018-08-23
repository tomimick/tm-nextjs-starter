
/* About page.
 *
 */

import React from 'react'
import Head from 'next/head'


export default class About extends React.Component {

    componentDidMount() {
        console.info("about did mount");
    }

    render () {
        return (
            <React.Fragment>
            <Head>
                <title>About</title>
            </Head>

            <h2>About</h2>

            <p>This is an empty about page.</p>

            <p className="example">
                This is styled via inline CSS in about.jsx</p>

            <style jsx>{`
                p.example {
                    color: #1a881a;
                    background: #dcffdc;
                    padding: 10px;
                    border: 1px dashed #111;
                }
                `}</style>

            </React.Fragment>
        )
    }
}

