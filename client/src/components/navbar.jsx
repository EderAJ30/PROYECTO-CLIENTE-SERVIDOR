import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">Home<Link />
          <Link to="/">Create Task<Link />
          
        </li>
      </ul>
    </div>
  );
};

export default navbar;
