import { Container } from 'utils/Container.styled';
import {
  AboutHeadings,
  Selector,
  AboutText,
  Card,
  CardItems,
  ItemValues,
  ItemAboutValues,
  HeadingsElectricity,
  ElectricityForAllTime,
  UnitElectricity,
  ItemValueSvg,
  WrapItemValueSvg,
  WrapElectricity,
  WrapAboutText,
  AboutImg,
} from './About.styled';

import iconsSvg from '../../assets/Icons/icons.svg';

const picturesEngineer = new URL(
  './../../images/engineer.png',
  import.meta.url
);
const picturesSolar = new URL(
  './../../images/solar-panels.png',
  import.meta.url
);

const About = () => {
  return (
    <Selector name="about">
      <Container>
        <WrapAboutText>
          <AboutHeadings>Main values of our company</AboutHeadings>
          <AboutText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </AboutText>
        </WrapAboutText>
        <Card>
          <CardItems>
            <WrapItemValueSvg>
              <ItemValueSvg>
                <use href={iconsSvg + '#maximize-circle'} />
              </ItemValueSvg>
              <ItemValues>Openness</ItemValues>
            </WrapItemValueSvg>
            <ItemAboutValues>
              to the world, people, new ideas and projects
            </ItemAboutValues>
          </CardItems>
          <CardItems>
            <WrapItemValueSvg>
              <ItemValueSvg>
                <use href={iconsSvg + '#global-edit'} />
              </ItemValueSvg>
              <ItemValues>Responsibility</ItemValues>
            </WrapItemValueSvg>
            <ItemAboutValues>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </ItemAboutValues>
          </CardItems>
          <AboutImg src={picturesEngineer} />
          <AboutImg src={picturesSolar} />
          <CardItems>
            <WrapItemValueSvg>
              <ItemValueSvg>
                <use href={iconsSvg + '#cpu'} />
              </ItemValueSvg>
              <ItemValues>Innovation</ItemValues>
            </WrapItemValueSvg>
            <ItemAboutValues>
              we use the latest technology to implement non-standard solutions
            </ItemAboutValues>
          </CardItems>
          <CardItems>
            <WrapItemValueSvg>
              <ItemValueSvg>
                <use href={iconsSvg + '#ranking'} />
              </ItemValueSvg>
              <ItemValues>Quality</ItemValues>
            </WrapItemValueSvg>
            <ItemAboutValues>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </ItemAboutValues>
          </CardItems>
        </Card>
        <HeadingsElectricity>
          Electricity we produced for all time
        </HeadingsElectricity>
        <WrapElectricity>
          <ElectricityForAllTime>
            1.134.147.814<UnitElectricity>kWh</UnitElectricity>
          </ElectricityForAllTime>
        </WrapElectricity>
      </Container>
    </Selector>
  );
};

export default About;
