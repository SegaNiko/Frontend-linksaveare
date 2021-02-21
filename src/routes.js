import {Switch, Route, Redirect} from "react-router-dom"

import { AuthPage } from "./pages/AuthPage"
import { CreatePage } from "./pages/CreatePage"
import { DetailPage } from "./pages/DetailPage"
import { LinksPage } from "./pages/LinksPage"

export const useRoutes = isAutnenticated => {
  if (isAutnenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage></LinksPage>
        </Route> 
        <Route path="/create" exact>
          <CreatePage></CreatePage>
        </Route> 
        <Route path="/detail/:id">
          <DetailPage></DetailPage>
        </Route> 
        <Redirect to="/create"></Redirect>
      </Switch>
    )
  }
  
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage></AuthPage>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
}