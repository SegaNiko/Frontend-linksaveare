import React,{useCallback ,useContext, useEffect, useState} from 'react'

import {LinksList} from '../components/LinksList'
import {Loader} from "../components/Loader"
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'

export const LinksPage = () => {
  const [links, setLinks] = useState([]);
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext);

  const fetchLinks =  useCallback( async () => {
    try {
    const req = await request('app/link', 'GET', null, {
          Authorization: `Bearer ${token}`
      })
     setLinks(req)
    } catch (e) {}  
  },[token,request])

  useEffect(() => {
    fetchLinks()
  },[fetchLinks])

  if (loading) {
    return <Loader /> 
   }

  return (
    <>
      {!loading && <LinksList links={links}></LinksList>}
    </>
  )
}
