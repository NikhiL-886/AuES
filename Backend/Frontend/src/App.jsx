import FileUpload from "./components/FileUpload"
import {Toaster} from "react-hot-toast"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Toaster/>
      <div className="drawer lg:hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 w-full">
        <div className="mx-2 flex-1 px-2">
          
          <img src="/vite.svg" alt="" />
          AuES
        </div>

          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24"
                   className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>

        
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 min-h-full">
          <li><a>Home</a></li>
          <li><a>Files</a></li>
          <li><a>Account</a></li>
          <li><a>About</a></li>
          <li><a>Buy a Coffee</a></li>
        </ul>
      </div>
    </div>
    <Navbar/>
    <FileUpload/>
    
    </>
  )
}

export default App
