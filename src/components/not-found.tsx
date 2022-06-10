import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main>
      <h3>Page not found</h3>
      <Link to={"/"}>go back home</Link>
    </main>
  );
};
