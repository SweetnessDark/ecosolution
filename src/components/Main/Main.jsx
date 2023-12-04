import {
  LearnMore,
  MainHeadings,
  MainText,
  Selector,
  BtnLearnMore,
  SvgArrowRight,
  WrapLearnMore,
  WrapContacts,
  Map,
  Email,
  MainPhoto,
  WrapAboutMain,
  WrapMainTextLink,
  ContainMain,
  CopyrightMain,
  MainHeadings2,
  WrapPeople,
  People,
  PeopleItem,
  PeopleImg,
  NamePeople,
  SpacialPeople,
} from './Main.styled';

import iconsSvg from '../../assets/Icons/icons.svg';
import { Container } from 'utils/Container.styled';
const picturesDesk = new URL('../../images/mask-group.png', import.meta.url);
const picturesPeople1 = new URL('./../../images/ceo.png', import.meta.url);
const picturesPeople2 = new URL('./../../images/tech.png', import.meta.url);
const picturesPeople3 = new URL('./../../images/director.png', import.meta.url);
const picturesPeople4 = new URL('./../../images/senior.png', import.meta.url);

const Main = () => {
  return (
    <Selector name="main">
      <Container>
        <ContainMain>
          <MainHeadings>RENEWABLE ENERGY For any task</MainHeadings>
          <WrapMainTextLink>
            <MainText>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </MainText>
            <WrapLearnMore>
              <LearnMore href="#cases">
                Learn more
                <BtnLearnMore>
                  <SvgArrowRight>
                    <use href={iconsSvg + '#arrow-right-more'} />
                  </SvgArrowRight>
                </BtnLearnMore>
              </LearnMore>
            </WrapLearnMore>
          </WrapMainTextLink>
        </ContainMain>
        <WrapContacts>
          <Map>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Map>
          <Email href="office@ecosolution.com">office@ecosolution.com</Email>
          <CopyrightMain>ecosolution © 2023</CopyrightMain>
        </WrapContacts>
        <MainPhoto src={picturesDesk} />
        <WrapAboutMain>
          <MainHeadings2>
            LET’s start with small start with ourselves
          </MainHeadings2>

          <MainText>
            <span>ECOSOLUTION</span> is the largest group of companies in
            Western Ukraine, which is engaged in the development and
            implementation of renewable environmentally friendly energy sources.
            We are the first privately owned company that received a loan from
            the European Bank for Reconstruction and Development (EBRD) and
            built the first wind farm in Western Ukraine. During the company's
            work, a number of projects in the field of energy were implemented.
            At the same time, new investment projects, in particular small
            hydropower and biofuels, are constantly being developed and
            developed with existing objects.
          </MainText>
        </WrapAboutMain>
        <WrapPeople>
          <People>
            <PeopleItem>
              <PeopleImg src={picturesPeople1} />
              <NamePeople>Andrii Duda</NamePeople>
              <SpacialPeople>CEO</SpacialPeople>
            </PeopleItem>
            <PeopleItem>
              <PeopleImg src={picturesPeople2} />
              <NamePeople>Yurii Turchenko</NamePeople>
              <SpacialPeople>Technology officer</SpacialPeople>
            </PeopleItem>
            <PeopleItem>
              <PeopleImg src={picturesPeople3} />
              <NamePeople>Vitalii Shevchenko</NamePeople>
              <SpacialPeople>Director</SpacialPeople>
            </PeopleItem>
            <PeopleItem>
              <PeopleImg src={picturesPeople4} />
              <NamePeople>Victor Dunaev</NamePeople>
              <SpacialPeople>Senior engineer</SpacialPeople>
            </PeopleItem>
          </People>
        </WrapPeople>
      </Container>
    </Selector>
  );
};

export default Main;
