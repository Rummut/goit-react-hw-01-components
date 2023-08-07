import { styled } from 'styled-components';

export const StatContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
  background-color: #ffffff;
  margin: auto;
  width: 350px;
  border-radius: 8px;
  border: 1px solid #e1e7ee;
`;

export const StatisticTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const StatisticItem = styled.ul`
  display: flex;
  border-bottom-left-radius: 8px;
  width: 350px;
`;

export const StatisticList = styled.li`
  display: flex;
  padding: 19px;
  background: #50c4f9;
  & + & {
    background: lime;
  }
  & + & + & {
    background: red;
  }
  & + & + & + &{
    background: blue;
  }
  & + & + & + & + &{
    background: teal;
  }
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
