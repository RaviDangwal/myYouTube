import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/store/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API call" + " " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-hamburger-menu-button-list-content-png-image_5288864.png"
          alt="hamburger icon"
          className="w-14 h-14 ml-5 m-4 cursor-pointer"
        />
        <a href="/">
          <img
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="youtubeLogo"
            className="w-44 ml-2"
          />
        </a>
      </div>

      <div className="p-6 col-span-10 ml-32">
        <div>
          <input
            type="text"
            className="w-1/2 input border border-gray-300 p-2 rounded-l-full focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="w-16 bg-blue-500 text-white p-2 rounded-r-full hover:bg-blue-60">
            🔍
          </button>
          {showSuggestion && (
            <div className="absolute bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestion.map((sug) => (
                  <li
                    key={sug}
                    className="py-2 shadow-sm hover:bg-gray-200 rounded-lg"
                  >
                    🔍 {sug}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
          className="w-10"
        />
      </div>
    </div>
  );
};

export default Head;
