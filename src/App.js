import './App.css';
import React from "react";
import  MiniTable  from './MiniTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Module from './module1';



function App() {
    return ( 
        <div className = "App">
            <Module/>
            <MiniTable/>
         </div>
        
    );
}

export default App;