import React, { Fragment } from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Other from './Components/Other'

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