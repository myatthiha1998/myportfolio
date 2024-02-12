import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MovingComponent from 'react-moving-text'

const Letters = ["Myat Thiha"];

const VideoLogo = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper} {...props}>
            {Letters.map((letter, index) => (
                <MovingComponent
                    key={index}
                    type="effect3D"
                    duration="2200ms"
                    delay={index * 100}
                    direction="alternate"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none"
                >
                    <Typography
                        custom={2}
                        variant="h2"
                        color="secondary"
                        className={classes.subTitle}
                    >
                        {letter}
                    </Typography>
                </MovingComponent>
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflow: "hidden",
        position: "relative",
        width: "300px",
        height: "75px",
        paddingTop: "15px"
    },
    mask: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "300px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "52px",
        },
    },
    video: {
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: "1px",
        right: "1px",
        width: "298px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "228px",
            height: "52px",
        },
    },
}));

export default VideoLogo;
