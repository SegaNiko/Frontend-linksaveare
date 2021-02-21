import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, error, request, clearError} = useHttp()
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  useEffect(() => {
    message(error);
    clearError()
  }, [error, message,clearError])
  
  useEffect(() => {
    window.M.updateTextFields()
  },[])

  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const registerHandler = async () => { 
    try {
      const data = await request('/app/auth/register','POST', {...form})
      message(data.message)
    } catch (e){} 
  }
  const loginHandler = async () => { 
    try {
      const data = await request('/app/auth/login','POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e){} 
  }

  return (
    
    <div className="row">
      <div className="col s6 offset-s3">  
      <h3 className="center">Amaizin work brother</h3>
        <div className="card green lighten-1">
          <div className="card-content white-text">
            <span className="card-title center">Авторизация</span>

            <div className="input-field">
              <input className="white-input"
                placeholder="Введите email"
                id="email"
                type="text"
                value={form.email}
                name="email"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field white-text">
              <input className="white-input"
                placeholder="Введите password"
                id="password"
                type="password"
                value={form.password}
                name="password"
                onChange={changeHandler}
              />
              <label htmlFor="password">Email</label>
            </div>
          </div>

          <div className="card-action">
            <button 
            className="btn cyan darken-1"
            disabled={loading}
            onClick={loginHandler}
            >
              Войти
            </button>
            <button 
            disabled={loading}
            className="btn green darken-2 right"
            onClick={registerHandler}
            >
              Регестация
            </button>
         </div>
      </div>
      </div>
    </div>
  )
}
