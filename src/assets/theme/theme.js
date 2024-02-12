import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: "#1A1A1A ",
            paper: "#bd3b22"
        },
        primary: {
            main: "#fff",
            contrastText: "#fff",
        },
        secondary: {
            main: "#fff",
            contrastText: "#fff",
        },
        text: {
            primary: "#fff",
            secondary: "#fff",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
        icon: {
            color: "#fff"
        }
    },
    logoColor: "#fff",
    ...baseTheme
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: "#fff",
        },
        primary: {
            main: "#7264E7",
            contrastText: "rgb(114, 100, 231)",
        },
        secondary: {
            main: "#7264E7",
            contrastText: "rgb(230,230,230)",
        },
        text: {
            primary: "#000",
            secondary: "rgb(30,30,30)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: {
        bg: "#7264E7",
        text: "rgb(230,230,230) "
    },
    logoColor: "#7264E7",
    ...baseTheme
});

export { darkTheme, lightTheme };
