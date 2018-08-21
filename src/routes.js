import React, { Fragment } from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import LazyImport from './Components/LazyImport'

const Nav = LazyImport({
  loader: () => import('./Components/Nav'/* webpackChunkName: 'nav' */),
})

const Main = LazyImport({
  loader: () => import('./Components/Main'/* webpackChunkName: 'main' */),
})

const Other = LazyImport({
  loader: () => import('./Components/Other'/* webpackChunkName: 'other' */),
})

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/other" component={Other} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes