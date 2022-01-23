import React, {useState, useEffect} from "react";
import Cards from "./Cards.js"
import SearchBox from "./SearchBox.js"
import Scroll from "./Scroll.js"
import "./app.css";




function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    
    useEffect(()=> {   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  setRobots(users) );
    },[]);
    

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => { return robot.name.toLowerCase().includes(searchField.toLowerCase())})

        if(robots.length === 0 ){
            return(
            <h1>Loading...</h1>
            )
        } else {
        return (
            <div className = "tc background">
                <h1>Friends List</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <Cards robots = {filteredRobots}/>
                </Scroll>
            </div>
        )}
    }


export default App;