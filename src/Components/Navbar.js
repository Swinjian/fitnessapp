import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

     const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="./">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="./workout">Workouts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="./nutrition">Nutrition</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="./challanges">Challanges</NavLink>
                                </li>
                                <li className="nav-item"> {isAuthenticated && <p>{user.nickname}</p>}</li>
                                    {isAuthenticated? (
                                        <li>
                                        <NavLink className="nav-link active" aria-current="page" 
                                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                        </NavLink>
                                        </li>
                                    ):(
                                        <li>
                                        <NavLink className="nav-link active" aria-current="page" 
                                        onClick={() => loginWithRedirect()}>
                                        Log In
                                        </NavLink>
                                        </li>
                                    )}
                                
                                <li className="nav-item">

                                </li>        
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="./signup">Sign in</NavLink>
                                </li>
    
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
};

export default Navbar;