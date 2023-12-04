import { styled } from 'styled-components';

export const TabsContainer = styled.div`
  width: 298px;
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  margin-top: 41px;

  display: flex;
  flex-wrap: wrap;

  input[type='radio'] {
    display: none;
  }

  #tab-btn-1:checked ~ #content-1,
  #tab-btn-2:checked ~ #content-2,
  #tab-btn-3:checked ~ #content-3,
  #tab-btn-4:checked ~ #content-4,
  #tab-btn-5:checked ~ #content-5 {
    display: block;
  }

  label {
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    text-decoration: none;
    color: #0d6efd;
    border: 0;
    border-radius: 0.375rem;
    background: 0 0;

    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const InputTabs = styled.input``;

export const TabsLabelItems = styled.label`
  margin-top: 36px;
  margin-bottom: 36px;

  // &:after {
  //   content: '';
  //   width: 320px;
  //   height: 1px;
  //   background: #97d28b;
  //   position: absolute;
  //   margin-top: -50px;
  //   left: 6%;
  // }

  // &:before {
  //   content: '';
  //   width: 320px;
  //   height: 1px;
  //   background: #97d28b;
  //   position: absolute;
  //   margin-top: 60px;
  //   left: 6%;
  // }
`;

export const WrapTabContent = styled.div`
  display: none;
  margin-top: 16px;
  margin-bottom: 36px;
  position: relative;

  &:target {
    display: block;
  }
`;

export const TabItemContent = styled.div`
  font-size: 14px;
  letter-spacing: -0.56px;
`;
