import React from "react";
import Card from "./Card";


const Cards = ({robots}) => {       
        
        return(
            <div className = "flex-wrap w-90 center mt3" >
            {robots.map((user, i)=> {
            return <Card key = {i} id={robots[i].id} title = {robots[i].name} username = {robots[i].username} email = {robots[i].email}   /> 
            })}
            </div>
        )
    }

export default Cards;