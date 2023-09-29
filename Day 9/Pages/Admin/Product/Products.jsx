import React from 'react'
import Sidebar from '../Layout/Sidebar'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <Sidebar>
    <div >
Product
          <ul >
          </ul>
        </div>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Title</th>
              <th scope="col">Product price</th>
              <th scope="col">Product descrption</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
            </table>
            </div>
    </Sidebar>
        
    </>
  )
}

export default Products