import { Container } from 'utils/Container.styled';
import { HeadingsCases, Selector } from './Cases.styled';
import { CustomSlider } from './Slider/Slider';

const Cases = () => {
  return (
    <Selector name="cases">
      <Container>
        <HeadingsCases>Successful cases of our company</HeadingsCases>
        <CustomSlider />
      </Container>
    </Selector>
  );
};

export default Cases;
