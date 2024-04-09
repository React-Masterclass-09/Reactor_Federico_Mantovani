import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreView, { gameByGenreLoader } from "../views/GenreView";
import AuthenticationLayout from "../components/AuthenticationLayout";
import SignInView from "../views/SignInView";
import LoginView from "../views/LoginView";

const router =createBrowserRouter([
    {
        path: routes.home,
        element: < Layout />,
        children: [
            {
                path: routes.home,
                element: <Homepage/>,
                loader: gamesLoader
            },
            {
                path: routes.genre,
                element: <GenreView/>,
                loader: gameByGenreLoader
            }
        ]

    },
    {
        path:routes.auth,
        element: <AuthenticationLayout />,
        children: [
            {
                path: routes.signin,
                element: <SignInView/>
            },
            {
                path: routes.login,
                element: <LoginView/> 
            }
        ]
        
    }
]);

export default router
