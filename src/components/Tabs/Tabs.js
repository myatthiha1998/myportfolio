import React, { useState } from "react";
import { makeStyles, Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery, List, ListItem } from "@material-ui/core";
import { experienceList } from "../../data";
import { useTranslation } from "react-i18next";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import IconBtn from "../IconBtn";


const StyledTabs = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles({ isMobile });
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
                centered
            >
                {experienceList.map((elem) => (
                    <Tab label={elem.position} key={elem.id} />
                ))}
            </Tabs>
            {experienceList.map((elem) => (
                <TabPanel value={value} index={elem.id} key={elem.id} >
                    <Box mb={4}>
                        <Typography variant="h5">
                            {t(`experience_${elem.id}_job`)} @{" "}
                            <Link
                                href={elem.links.website}
                                color="primary"
                            >
                                {elem.company}
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" fontSize="14">
                            {t(`experience_${elem.id}_duration`)}
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="h6" color="textPrimary">
                            {t(`experience_${elem.id}_title`)}
                        </Typography>
                        <List >
                            {elem.tasks && elem.tasks.map((point, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <IconBtn icon={OpenWithIcon} m={1} />
                                    </ListItemIcon>
                                    <ListItemText primary={point} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </TabPanel>
            ))}
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1} minHeight={isMobile ? 0 : "350px"}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: (props) => (props.isMobile ? "column" : "row"),
    },
    tabs: {
        width: (props) => (props.isMobile ? "inherit" : "200px"),
        maxWidth: (props) => (props.isMobile ? "inherit" : "200px"),
        minWidth: (props) => (props.isMobile ? "inherit" : "200px"),
    },
    ListItem: {
        color: theme.palette.text.primary
    }
}));

export default StyledTabs;
