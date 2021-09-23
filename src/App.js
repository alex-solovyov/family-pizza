import React from "react"
import { Route, Switch } from "react-router-dom"
import { Header } from './components'
import { Home, Cart, Error } from './pages'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
