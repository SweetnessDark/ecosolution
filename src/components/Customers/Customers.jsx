import { Container } from 'utils/Container.styled';
import {
  AboutCustomers,
  CustomersItems,
  HeadingCustomers,
  ImgCustomers,
  Selector,
  WrapCustomersItems,
} from './Customers.styled';

const picturesCustomersPhoto1 = new URL(
  './../../images/bosch.png',
  import.meta.url
);
const picturesCustomersPhoto2 = new URL(
  '../../images/western-bug.png',
  import.meta.url
);
const picturesCustomersPhoto3 = new URL(
  './../../images/audi.png',
  import.meta.url
);
const picturesCustomersPhoto4 = new URL(
  './../../images/dnipro-m.png',
  import.meta.url
);

const Customers = () => {
  return (
    <Selector name="customers">
      <Container>
        <HeadingCustomers>our satisfied customers</HeadingCustomers>
        <WrapCustomersItems>
          <CustomersItems>
            <ImgCustomers src={picturesCustomersPhoto1} />
            <AboutCustomers>Bosch</AboutCustomers>
          </CustomersItems>
          <CustomersItems>
            <ImgCustomers src={picturesCustomersPhoto2} />
            <AboutCustomers>Zakhidnyi Buh</AboutCustomers>
          </CustomersItems>
          <CustomersItems>
            <ImgCustomers src={picturesCustomersPhoto3} />
            <AboutCustomers>Audi</AboutCustomers>
          </CustomersItems>
          <CustomersItems>
            <ImgCustomers src={picturesCustomersPhoto4} />
            <AboutCustomers>Dnipro M</AboutCustomers>
          </CustomersItems>
        </WrapCustomersItems>
      </Container>
    </Selector>
  );
};

export default Customers;
