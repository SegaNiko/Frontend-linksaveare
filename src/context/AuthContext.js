import {createContext} from "react"

const noop = () => {};

export const AuthContext = createContext({
  token: null,
  ueseId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})