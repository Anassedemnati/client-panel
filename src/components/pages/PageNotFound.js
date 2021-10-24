import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h2>Page Not Found 404!</h2>
            <br />
            <Link to="/" className="btn btn-sm btn-primary">Back Home</Link>
        </div>
    )
}
