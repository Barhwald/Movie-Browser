import React from "react";
import { Link } from "react-router-dom";
import Hero from "./hero";

const PageNotFound = () => (
  <div>
    <Hero text={"404 - Not Found!"} />
    <div className="container">
        <div className="row justify-content-center mt-4">
            <p className="lead text-center">This page doesn't exist. Click the link below to return to Home.</p>
            <div className="col-8 text-center"><Link to="/" className="link-home">Go to Home</Link></div>
        </div>

    </div>
  </div>
);

export default PageNotFound;
