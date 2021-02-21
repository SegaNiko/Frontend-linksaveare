import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
  
  if(!links.length) {
    return <p className="center">Links not found. Try to create someone</p>
  }
  return (
    <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Origin</th>
              <th>Less link</th>
              <th>Open link</th>
          </tr>
        </thead>

        <tbody>
          {links.map((item,index) => {
            return ( 
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>
                  <Link to={`/detail/${item._id}`}>Click to open</Link>
                </td>
              </tr>
             )
          })}     
        </tbody>
      </table>
  )
}
