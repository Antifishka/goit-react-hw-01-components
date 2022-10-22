import styled from '@emotion/styled';

export const StatisticThumb = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    padding: 5px;

    font-size: 14px;

    color: #fff;
    background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
