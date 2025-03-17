import React from 'react'
import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <div>
        <h1>Team Page</h1>
        <div className="card" style={{height:"18rem"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<button>
  <Link className="btn btn-primary" to="/team/profile">
  Click to see Profile
  </Link>
  
</button>
    </div>
  )
}
