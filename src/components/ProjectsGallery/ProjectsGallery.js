import React, { useState } from "react";

import { AnimatePresence, AnimateSharedLayout, useReducedMotion } from "framer-motion";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { projectList } from "../../data";
import { Button } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import MovingComponent from 'react-moving-text'
import DownloadIcon from '@mui/icons-material/Download';

const ProjectsGallery = () => {
    const classes = useStyles();

    const { t } = useTranslation()
    const [selectedId, setSelectedId] = useState(null);
    const shouldReduceMotion = useReducedMotion();

    const getSelected = (id) => projectList.find((elem) => elem.id === id);
    return (
        <AnimateSharedLayout type="crossfade">
            <Grid container justifyContent="flex-end" style={{ paddingRight: 15 }} >
                <Button
                    href="/Detail_Projects_Info.pdf"
                    variant="outlined"
                    color="primary"
                    underline="none"
                >
                    <DownloadIcon /> Detail Projects Info
                </Button>
            </Grid>
            <Grid container spacing={4} className={classes.galleryContainer}>
                {projectList.map((item, k) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        classes={{ item: classes.item }}
                    >
                        <Card
                            id={item.id}
                            title={item.title}
                            overview={t(`projects_${item.id}_overview`)}
                            frontImage={item.frontImage}
                            technologies={item.technologies}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                        />
                    </Grid>
                ))}
            </Grid>
            <AnimatePresence exitBeforeEnter={shouldReduceMotion ? false : true}>
                {selectedId && (
                    <ExtendedCard
                        key={selectedId}
                        id={selectedId}
                        title={getSelected(selectedId).title}
                        overview={t(`projects_${selectedId}_extended_overview`)}
                        backgroundImage={getSelected(selectedId).backgroundImage}
                        frontImage={getSelected(selectedId).frontImage}
                        technologies={getSelected(selectedId).technologies}
                        handleClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    custom={2}
                    variant="h5"
                    mt={1}
                    color="secondary"
                    className={classes.subTitle}
                >
                    <MovingComponent type="typewriter" dataText={["You can check some more projects in github repository."]} />
                </Typography>
            </div>
        </AnimateSharedLayout >
    );
};

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        overflow: "visible",
        width: "100%",
        margin: "0 auto"
    },
    item: {
        overflow: "visible",
    },
}));

export default ProjectsGallery;
