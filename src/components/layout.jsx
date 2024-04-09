import {Outlet} from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx"
import SideBar from "./SideBar/SideBar.jsx"

export default function Layout(){

    return (
        <>
        <NavBar />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 px-0">
                    <SideBar/>
                </div>
                <div className="col-12 col-md-10">
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    )
}
