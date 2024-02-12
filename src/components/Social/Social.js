import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useAnimation } from "framer-motion";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";
import loaderContext from "../../contexts/loaderContext";

const Social = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        if (!isLoading) {
            controls.start(i => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 1.8 + (i * 0.1),
                },
            }));
        } else {
            controls.start({ opacity: 0, y: 0 });
        }
    }, [isLoading, controls]);

        return (
            <div className={classes.mobileWrapper}>
                <IconBtn icon={GitHub} m={1} href="https://github.com/myatthiha-ucsy26" />
                <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/in/myatthiha-ucsy26/" />
                <IconBtn icon={Email} m={1} href="mailto:myatthiha.ucsy@gmail.com" />
            </div>
        );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "fixed",
        bottom: 0,
        padding: theme.spacing(2),
        zIndex: 100,
    },
    mobileWrapper: {
        display: "flex",
    },
}));

export default Social;
