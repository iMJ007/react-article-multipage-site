import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
    const queryString = useLocation().search;
    
    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");
    console.log(name);

  return (
    <div>
        <h2>Hey {name.toUpperCase()}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis necessitatibus odit, in fugit rerum consequuntur consequatur aspernatur numquam modi voluptate soluta quo perferendis nemo? Similique nobis alias expedita laborum?</p>
    </div>
  )
}
