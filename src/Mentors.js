import React from "react";
import Card from './Card.js';
import profiles from './Profiles.js';



function Mentors() {
return(
 <div style={{ backgroundColor:'#ffd571'}} >
  <h1 className='header'> Our Mentors </h1>
  <div className="row">
    {profiles.map(profiles => 
      <Card
        key={profiles.id}
        name={profiles.name}
        img={profiles.imgURL}
        text={profiles.text}
        email={profiles.email}
      />   )}
  </div>
</div>
)};

export default Mentors;
