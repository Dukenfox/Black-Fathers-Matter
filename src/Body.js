import React from 'react';
import logo from './BLM.png';
import cover from './Cover.jpg';
function Body() {
    return(
        
    <div>
        <img src={cover} className="cover" />
        <div className= "body">
        <p className="p">Black Fathers Matter</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="p">Empowering Black Youth Through Mentorship & Excellence</p>
        </div>

    </div>
    )};    
export default Body; 