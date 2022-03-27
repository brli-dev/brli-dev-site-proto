import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world.
        From Back-end to Design (currently sample text)
     </SectionText>
     <List>
       <ListItem>
         <DiReact size="3rem" />
           <ListContainer>
             <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                React.js, HTML/CSS
              </ListParagraph>
            </ListContainer>
       </ListItem>
       <ListItem>
         <DiFirebase size="3rem" />
           <ListContainer>
             <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with <br />
                Node.js, MongoDB
              </ListParagraph>
            </ListContainer>
       </ListItem>
       <ListItem>
         <DiPython size="3rem" />
           <ListContainer>
             <ListTitle>Languages</ListTitle>
              <ListParagraph>
                Experience with <br />
                Python, Java, C, Javascript, OCaml
              </ListParagraph>
            </ListContainer>
       </ListItem>
       <ListItem>
         <DiGithubBadge size="3rem" />
           <ListContainer>
             <ListTitle>Others</ListTitle>
              <ListParagraph>
                Experience with <br />
                Git, Heroku
              </ListParagraph>
            </ListContainer>
       </ListItem>
     </List>
  </Section>
);

export default Technologies;
