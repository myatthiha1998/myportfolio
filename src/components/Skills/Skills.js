import React from "react";
import { Typography, makeStyles, Paper } from "@material-ui/core";
import { skillsList } from "../../data";

const Skills = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                {skillsList.map((elem, k) => (
                    <Paper elevation={10} key={k} className={classes.paper}>
                        <Typography align="center" >{elem.title}</Typography>
                    </Paper>
                ))}
            </div>
        </>

    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    skillWrapper: {
        width: "100%",
    },
    skillTitle: {
        whiteSpace: "nowrap",
        marginRight: theme.spacing(1),
    },
    paper: {
        background: "#1D2528",
        color: "#fff",
        marginRight: "10px",
        marginBottom: "10px",
        minWidth: "50px",
        padding: "10px"
    }
}));

export default Skills;
