import styled from 'styled-components';

export const CounterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const TimerValue = styled.p`
  font-size: 50px;
  letter-spacing: 2px;
  color: purple;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  color: white;
  width: 150px;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  font-family: inherit;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: ${(props) => `2px 2px 5px ${props.shadow}`};
  margin-bottom: 20px;

  &:hover {
    opacity: 0.9;
    box-shadow: ${(props) => `1px 1px 3px ${props.shadow}`};
  }
`;

export const CountValue = styled.p`
  color: white;
  width: 300px;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  font-size: 32px;
  padding: 20px 30px;
  border-radius: 5px;
  margin: 100px auto 0;
`;
