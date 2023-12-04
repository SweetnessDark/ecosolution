import { styled } from 'styled-components';

export const Form = styled.form`
  width: 320px;
  height: 559px;
  background: #eaedf1;
  padding: 36px 12px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 28px;
  border: none;

  .submit {
    display: flex;
    justify-content: flex-end;
    margin-right: 22px;
  }
`;

export const WrapForm = styled.div`
  textarea {
    width: 296px;
    height: 147px;
    border: none;
    border-bottom: 1px solid #97d28b;
    background: transparent;

    color: #828382;
    font-family: Fira Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const Input = styled.input`
  width: 296px;
  height: 31px;
  border: none;
  border-bottom: 1px solid #97d28b;
  background: transparent;

  color: #828382;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const BtnForm = styled.a`
  display: flex;
  height: 39px;
  width: 83px;
  padding-left: 16px;
  align-items: center;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;
`;

export const ArrowBtn = styled.svg`
  width: 16px;
  height: 16px;

  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
`;
