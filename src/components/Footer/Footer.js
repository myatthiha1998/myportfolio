import React from "react";
import { Container, Typography, makeStyles, Divider, useTheme, Box } from "@material-ui/core";
import Social from "../Social";

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Container>
            <Divider style={{ backgroundColor: theme.palette.primary.main }} />
            <Box className={classes.footer}>
                <Social />
                <Typography variant="body2" color="initial">
                    Portfolio © 2024 Myat Thiha
                </Typography>
            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
    },
}));

export default Footer;
