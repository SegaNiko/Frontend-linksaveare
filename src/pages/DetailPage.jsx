import React, { useEffect, useCallback, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LinkCard } from '../components/LinkCard';
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const DetailPage = () => {
  const { token  } =  useContext(AuthContext)
  const { loading, request  } = useHttp(); 
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback( async () => {
    try {
      const fetched = await request(`/app/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (e) {}
  },[token, linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {!loading && link && <LinkCard link={link} />}
    </>
  )
}
