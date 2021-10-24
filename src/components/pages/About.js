import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>About page</h2>
            <h5>{props.match.params.id}</h5>
            
            <h5>{props.match.params.name}</h5>
            <p>
                
            </p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt doloribus fugiat enim sint iusto facere illo tempora, veritatis provident distinctio.
        </div>
    )
}
