import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container'
import Title from '../ui/Title'
import CodingSkills from './CodingSkills'

const STRINGS = {
  title: 'about',
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const TitleContainer = styled(Container)`
  border-top: ${(props) => props.theme.border.highlight};
`

const InnerContainer = styled(Container)``

const About = () => {
  return (
    <MainContainer id="about">
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <InnerContainer>
        <p>add about here!</p>
      </InnerContainer>
      <CodingSkills />
    </MainContainer>
  )
}

export default About
