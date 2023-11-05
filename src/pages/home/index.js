import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <div className="hi">
            <div>
                <h1 className="hello">hello</h1>
                <Link to="/giftshop" style={{textDecoration:"none"}}>
                    <Button>Gift</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;