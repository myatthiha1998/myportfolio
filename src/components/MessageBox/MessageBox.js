import React, { useState } from "react";
import { Box, Button, Container, makeStyles, TextField, Typography } from "@material-ui/core";
import { useMediaQuery, useTheme } from "@material-ui/core";

import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../assets/images/Check";
import { useTranslation } from "react-i18next"
import MovingComponent from 'react-moving-text'

const MessageBox = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [sending, setSending] = useState(false);
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const { t } = useTranslation()
    const SendEmail = (object) => {
        setSending(true);
        emailjs.send("service_aw4addn", "template_c4b0w36", object, "dR0FGxubo7LlJwA-q").then(
            (result) => {
                setSendEmailSuccess(true);
                setSending(false);
            },
            (error) => {
                setSending(false);
            }
        );
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Email adress is not valid").required("Email adress is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values) => {
            SendEmail(values);
            setSendEmailSuccess(true);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <Container maxWidth="md">

            <Box overflow="hidden" style={{ position: "relative", minHeight: "320px" }}>
                <AnimatePresence>
                    {!sendEmailSuccess && (
                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                            <TextField
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                helperText={formik.touched.name && formik.errors.name}
                                variant="outlined"
                                margin="normal"
                                type="text"
                                fullWidth
                                id="name"
                                label={t('contact_full_name')}
                                name="name"
                                autoComplete='off'
                            />
                            <TextField
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                helperText={formik.touched.email && formik.errors.email}
                                type="email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label={t('contact_email')}
                                name="email"
                                autoComplete='off'
                            />
                            <TextField
                                error={Boolean(formik.touched.message && formik.errors.message)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                helperText={formik.touched.message && formik.errors.message}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="message"
                                label="Message"
                                type="text"
                                id="message"
                                minRows={5}
                                autoComplete='off'
                            />
                            <Box display="flex" justifyContent="center" pr={!isMobile ? 15: ''}>
                                <Button
                                    className={classes.submitBtn}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    disabled={sending}
                                >
                                    {t('contact_btn')}
                                </Button>
                            </Box>
                        </form>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {sendEmailSuccess && (
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            style={{
                                position: "absolute",
                                top: 0,
                                height: "100%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {isMobile &&
                                <Box m={2}>
                                    <Check width="150" />

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography
                                            custom={2}
                                            variant="body2"
                                            mt={1}
                                            color="secondary"
                                            className={classes.subTitle}
                                        >
                                            <MovingComponent
                                                type="typewriter" dataText={["Your message has been ", "successfully sent.", "I'll reply ", "as soon as possible."]} />
                                        </Typography>
                                    </div>
                                </Box>
                            }
                            <>
                                {!isMobile &&
                                    <><Box m={2}>
                                        <Check width="150" />
                                    </Box><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography
                                                custom={2}
                                                variant="body2"
                                                mt={1}
                                                color="secondary"
                                                className={classes.subTitle}
                                            >
                                                <MovingComponent
                                                    type="typewriter" dataText={["Your message has been successfully sent.I'll reply as soon as possible."]} />
                                            </Typography>
                                        </div></>
                                }
                            </>

                        </Box>
                    )}
                </AnimatePresence>
            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
    },
    submitBtn: {
        width: "200px",
        "&:hover": {
            borderColor: "#D1CCF7",
        },
    },
}));

export default MessageBox;
