
/*
 * Top level app & layout, loaded ONCE at the start
 */

import App, {Container} from 'next/app'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import MyHeader from "../components/MyHeader"

// required here for hot reload
import css from "../styles/layout.sass"


export default class MyApp extends App {

    componentDidMount() {
        console.info("app did mount");
    }

    render () {
        const {Component, pageProps} = this.props;

        return <Container>

            {/* global sass styles
                pages may also define Head which is merged with this */}
            <Head>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <title>React + Nextjs + MobX starter</title>
            </Head>

            <div className="outer">
                <MyHeader />

                <article>
                    <Component {...pageProps} />
                </article>

                <aside className="sidebar-right">
                Sidebar
                </aside>

                <footer> Sample Footer
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <a className="right" href="https://github.com/tomimick/tm-nextjs-starter">Source at Github</a>
                </footer>
            </div>
            </Container>
    }
}

