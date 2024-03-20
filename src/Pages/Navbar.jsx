import { Link } from "react-router-dom"
import {  useSelector } from "react-redux"
const Navbar = () => {
    const { counterReducer } = useSelector(state=>state);
  return (
    <>
          <nav className="navbar navbar-expand Nav">
              <div className="">
                  <div className="" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link" href="#">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to={'/about'}>About<sup className="text-light bg-danger rounded-pill badge">{counterReducer.value}</sup></Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar
