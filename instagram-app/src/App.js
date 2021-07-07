import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "../../dummy-data.js";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            gram: dummyData
        }
    }
    render() {
        return (
            <div className="App">
                <SearchBar/>
                <PostContainer/>
            </div>
        );
    }
}

export default App;
