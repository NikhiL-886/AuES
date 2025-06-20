import React from "react";
import { useState,useEffect } from "react";

function Navbar(){
    const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
    const [sticky,setSticky]=useState(false);
    const element=document.documentElement;
    useEffect(()=>{
        const handleScroll=()=>{
        if(window.scrollY>0){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }

    },[]);

    useEffect(() => {
        if (theme === "dark") {
          element.setAttribute("data-theme", "dark");
        } else {
          element.setAttribute("data-theme", "light");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);

    return(
        <>
        <div className=" hidden lg:bg-base-200 lg:text-base-content lg:border border-neutral lg:h-16 lg:flex  lg:items-center ">

            <div className="flex ml-4 items-center">
            <img src="/vite.svg" alt="" />
            <span>AuES</span>
            </div>
            <ul className="flex space-x-20 ml-20 ">
            <li className="hover:text-blue-500 hover:cursor-pointer ">Home</li>
            <li className="hover:text-blue-500 hover:cursor-pointer ">Files</li>
            <li className="hover:text-blue-500 hover:cursor-pointer ">Account</li>
            <li className="hover:text-blue-500 hover:cursor-pointer ">About</li>
            <li className="hover:text-blue-500 hover:cursor-pointer ">Buy a Coffee</li>
            </ul>          
            <div className="flex items-center space-x-10 absolute right-10">
                <div>
                <label className="swap swap-rotate mt-3">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="light"?"dark":"light")}
    >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
                </div>
                <div>Login</div>
            </div>
        </div>

        </>
    )
}


export default Navbar