import { Container } from 'utils/Container.styled';
import {
  Selector,
  BgService,
  HeadingsService,
  ItemService,
  ItemsServices,
  TextService,
  WrapItemsService,
  ItemServiceLink,
  WrapTextService,
  WrapHeadings,
  WrapContainer,
  WrapService,
} from './Service.styled';

const picturesBgServices = new URL('../../images/energy.png', import.meta.url);

const Service = () => {
  return (
    <Selector name="service">
      <Container>
        <WrapContainer>
          <WrapHeadings>
            <HeadingsService>The services we provide</HeadingsService>
          </WrapHeadings>
          <WrapService>
            <WrapTextService>
              <TextService>
                Development and implementation of renewable enviroMentally
                friendly energy sources
              </TextService>
            </WrapTextService>
            <WrapItemsService>
              <ItemsServices>
                <ItemService>
                  <ItemServiceLink>Solar</ItemServiceLink>
                </ItemService>
                <ItemService>
                  <ItemServiceLink>Wind</ItemServiceLink>
                </ItemService>
                <ItemService>
                  <ItemServiceLink>Hydro</ItemServiceLink>
                </ItemService>
                <ItemService>
                  <ItemServiceLink>Thermal</ItemServiceLink>
                </ItemService>
                <ItemService>
                  <ItemServiceLink>Nuclear</ItemServiceLink>
                </ItemService>
              </ItemsServices>
              <BgService src={picturesBgServices} />
            </WrapItemsService>
          </WrapService>
        </WrapContainer>
      </Container>
    </Selector>
  );
};

export default Service;
