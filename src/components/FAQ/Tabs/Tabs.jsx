import {
  InputTabs,
  TabsContainer,
  TabsLabelItems,
  WrapTabContent,
} from './Tabs.styled';

export const Tabs = () => {
  return (
    <TabsContainer className="tab">
      <InputTabs checked id="tab-btn-1" name="tab-btn" type="radio" value="" />
      <TabsLabelItems for="tab-btn-1">
        {' '}
        How do wind turbines and solar panels work together in a renewable
        energy system?
      </TabsLabelItems>
      <WrapTabContent class="tab-content" id="content-1">
        Wind turbines and solar panels generate electricity through different
        mechanisms. Wind turbines harness the kinetic energy of the wind to turn
        blades, which then drive a generator. Solar panels convert sunlight into
        electricity through the photovoltaic effect. When integrated into a
        renewable energy system, these technologies complement each other by
        providing a continuous and reliable power supply. Wind power is often
        more abundant during certain times, while solar power is consistent
        during daylight hours, resulting in a more stable overall energy output.
      </WrapTabContent>
      <InputTabs id="tab-btn-2" name="tab-btn" type="radio" value="" />
      <TabsLabelItems for="tab-btn-2">
        {' '}
        What sets EcoSolution's renewable energy solutions apart from others on
        the market?
      </TabsLabelItems>
      <WrapTabContent class="tab-content" id="content-2">
        When integrated into a renewable energy system, these technologies
        complement each other by providing a continuous and reliable power
        supply. Wind power is often more abundant during certain times, while
        solar power is consistent during daylight hours, resulting in a more
        stable overall energy output.
      </WrapTabContent>
      <InputTabs id="tab-btn-3" name="tab-btn" type="radio" value="" />
      <TabsLabelItems for="tab-btn-3">
        How can businesses and communities benefit from integrating renewable
        energy solutions from EcoSolution?
      </TabsLabelItems>
      <WrapTabContent class="tab-content" id="content-3">
        Wind turbines harness the kinetic energy of the wind to turn blades,
        which then drive a generator. Solar panels convert sunlight into
        electricity through the photovoltaic effect.
      </WrapTabContent>
      <InputTabs id="tab-btn-4" name="tab-btn" type="radio" value="" />
      <TabsLabelItems for="tab-btn-4">
        {' '}
        What measures does EcoSolution take to ensure the environmental
        sustainability of its products?
      </TabsLabelItems>
      <WrapTabContent class="tab-content" id="content-4">
        Wind turbines and solar panels generate electricity through different
        mechanisms. Wind turbines harness the kinetic energy of the wind to turn
        blades, which then drive a generator. Solar panels convert sunlight into
        electricity through the photovoltaic effect.
      </WrapTabContent>
      <InputTabs id="tab-btn-5" name="tab-btn" type="radio" value="" />
      <TabsLabelItems for="tab-btn-5">
        {' '}
        How does EcoSolution engage with local communities and support a just
        transition to renewable energy?
      </TabsLabelItems>
      <WrapTabContent class="tab-content" id="content-5">
        Solar panels convert sunlight into electricity through the photovoltaic
        effect. When integrated into a renewable energy system, these
        technologies complement each other by providing a continuous and
        reliable power supply.
      </WrapTabContent>
    </TabsContainer>
  );
};
