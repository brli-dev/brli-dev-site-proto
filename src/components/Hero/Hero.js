import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Website!
      </SectionTitle>
      <SectionText>
        Hi! I am Brian, a student at Boston University studying Computer Science! This is my first website, feel free to look around!
      </SectionText>
      <Button onClick={() => window.location = 'google.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;