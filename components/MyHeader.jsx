
/*
 * Header component of the site, observes the count of the movies
 *
 */

import { observer } from "mobx-react"

import store from "../store";


const MyHeader = observer((props) => (
    <header>
        <p className="right">Movie count={store.count}</p>
        <h1>React + Next.js + MobX starter</h1>
        <p>by Tomi Mickelsson</p>

    </header>
))

export default MyHeader;

