import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //  early return pattern
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="p-4 w-40 shadow-lg col-span-1">
      <ul>
        <Link to="/">
          <li className="font-bold">Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>YouTube Music</li>
      </ul>
      <h1 className="font-bold mt-4">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Video</li>
        <li>Your Movies</li>
        <li>Watch Later</li>
        <li>Downloads</li>
      </ul>
      <h1 className="font-bold mt-4">Subscription</h1>
      <ul>
        <li>Ndtv</li>
        <li>Think School</li>
        <li>Akshay Saini</li>
        <li>Unfilterd Samdish</li>
      </ul>
    </div>
  );
};

export default Sidebar;
