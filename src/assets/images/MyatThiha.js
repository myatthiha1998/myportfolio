import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@material-ui/core";
import ThemeContext from "../../contexts/themeContext";

const container = {
    hidden: {
        opacity: 1,
        scale: 1,
    },
    visible: {
        opacity: 0,
        scale: 0,
        transition: {
            delay: 3.4,
            duration: 0.3,
        },
    },
};

const MyatThiha = (props) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{
                    width: "500px",
                    height: "500px",
                    maxWidth: "100%",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <motion.img
                    src={!isDarkMode ? "logo.png" : "dark-logo.png"}
                    alt="logo"
                    style={{
                        width: isMobile ? "200px" : "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                        margin: "0 auto",
                    }}
                    initial="hidden"
                    animate="visible"
                />
            </motion.div>
        </>
    );
};

export default MyatThiha;
