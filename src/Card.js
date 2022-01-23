import React from "react";


const Card = ({id, title,username,email}) => { 

        return(
        <div className = "tc ma2 dib br2 shadow-3 grow" style = {{backgroundColor : 'white'}}> 
        <h1 style = {{ fontStyle: "italic", color: "black", paddingTop:"5%"}} > {title} </h1>
        <img src={`https://robohash.org/${id}?200x200`} alt = ""/> 
        <h3 style = {{ fontStyle: "italic", color: "black",  paddingTop:"0%"}} > {username} </h3>
        <h3 style = {{ fontStyle: "italic", color: "black",  paddingTop:"0%"}} > {email} </h3>
        </div>
        )
};

export default Card;

