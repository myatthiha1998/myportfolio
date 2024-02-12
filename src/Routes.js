import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
const MainHome = lazy(() => import("./pages/MainHome"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/Loader"));

const Routes = () => {
    return (
        <>
            <Loader />
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainHome} />
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
