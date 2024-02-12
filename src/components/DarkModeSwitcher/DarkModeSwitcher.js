import React, { useContext } from "react";
import { Switch, FormControlLabel, makeStyles } from "@material-ui/core";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeContext from "../../contexts/themeContext";

const useStyles = makeStyles({
    label: {
        lineHeight: 0.5, // Change the line-height here
    },
});

const DarkModeSwitcher = ({ onClose }) => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const classes = useStyles();

    return (
        <FormControlLabel
            classes={{ label: classes.label }} // Pass the classes to the FormControlLabel
            control={
                <Switch
                    checked={isDarkMode}
                    name="checkedDarkMode"
                    color="primary"
                    onChange={() => {
                        if (onClose) {
                            onClose();
                        }
                        setIsDarkMode(!isDarkMode);
                    }}
                />
            }
            label={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
            labelPlacement="start"
        />
    );
};

export default DarkModeSwitcher;
