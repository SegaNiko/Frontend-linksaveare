import React,{  useState,useEffect, useContext  }from 'react'
import {  useHistory  } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  },[])

  const changeHandler = (e) => {
    setLink(e.target.value)
  }
  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request('/app/link/generate','POST',{from: link},{
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input className="white-input"
            placeholder="Введите новую ссылку"
            id="link"
            type="text"
            value={link}
            onChange={changeHandler}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Link</label>
        </div>
      </div>
    </div>
  )
}
