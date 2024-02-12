import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills/Skills";
import { useTranslation } from "react-i18next";

const SkillSet = () => {
    const { t } = useTranslation()

    return (
        <SectionContainer id="skills" title={t('menu_skills')} maxWidth="md">
            <Skills />
        </SectionContainer>
    );
};

export default SkillSet;
