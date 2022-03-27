import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


// const projectDemo = [{
//   title: 'Project 1',
//   description: 'This is a somewhat long description of Project 1'
// },{
//   title: 'Project 2',
//   description: 'This is a description of Project 2'
// },{
//   title: 'Project 3',
//   description: 'This is a description of Project 3'
// },{
//   title: 'Project 4',
//   description: 'This is a description of Project 4'
// }];

      
const Projects = () => (
  <Section nopadding id= "projects">
    <SectionDivider />
    < br/>
    <SectionTitle> Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key = {id}>
          <Img src = {image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo> {description} </CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key= {i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href ={visit}>Code</ExternalLinks>
              <ExternalLinks href ={source}>Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;