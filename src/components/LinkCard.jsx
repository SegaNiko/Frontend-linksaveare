import React from 'react'

export const LinkCard = ({link}) => {
  return (
    <div>
      <h2>Your Link</h2>
      <p>Best Link in your life : <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From : <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Cliks to link : <strong>{link.click}</strong></p>
      <p>Date of create : <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>
  )
}
