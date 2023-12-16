import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import LayoutModule from "./Layout_Maket.module.css"

const Layout_Maket = () => {
  return (
    <>
    <Navbar/>
    <hr />
    <Outlet/>
    <footer className={LayoutModule.Footer}>
        <span>New York Times <span className={LayoutModule.red}>news.</span></span>
    </footer>
    </>
  )
}

export default Layout_Maket