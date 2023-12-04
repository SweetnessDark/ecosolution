import { Link } from 'react-scroll';
import { Container } from 'utils/Container.styled';
import {
  Selector,
  HeadingsFAQ,
  ContactUs,
  Questions,
  BlackCircle,
} from './FAQ.styled';
import { Tabs } from './Tabs/Tabs';

const FAQ = () => {
  return (
    <Selector name="faq">
      <Container>
        <HeadingsFAQ>Frequently Asked Questions</HeadingsFAQ>
        <Tabs />
        <Questions>Didn't find the answer to your question?</Questions>
        <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <ContactUs>
            Contact Us <BlackCircle />
          </ContactUs>
        </Link>
      </Container>
    </Selector>
  );
};

export default FAQ;
