import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import ThemeContext from "../../contexts/themeContext";

const useStyles = makeStyles((theme) => ({
    logo: {
        maxWidth: "200px",
        height: "auto",
        display: "block",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "200px",
        },
    },
}));

const NameLogo = (props) => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <img
            className={classes.logo}
            src={!isDarkMode ? "logo.png" : "dark-logo.png"}
            alt="Logo"
            style={{ width: isSmallScreen ? "100%" : "" }}
        />
    );
};

export default NameLogo;
