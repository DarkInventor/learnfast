import React from "react";

function Nav() {
  return (
    <div className="navbar p-3 bg-base-100 bg-gradient-to-r from-blue-500 to-purple-500 shadow lg:text-white !sm:text-black !md:text-black">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pricing</a>
              <ul className="p-2">
                <li>
                  <a>Documentation</a>
                </li>
                <li>
                  <a>Connect</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost sm:text-xl md:text-xl lg:text-2xl text-xl text-white">LearnFast</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary >Pricing</summary>
              <ul className="p-2 !lg:text-black !text-black !sm:text-black !md:text-black">
                <li>
                  <a>Documentation</a>
                </li>
                <li>
                  <a>Connect</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-2">
      {/* <input type="checkbox" value="synthwave" className="toggle theme-controller"/>     */}
        <a className="btn">Get Started </a>
      </div>
    </div>
  );
}

export default Nav;
