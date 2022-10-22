import styled from '@emotion/styled';

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    overflow: hidden;

    color: #757575;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    overflow: hidden;
    background-color: #f4f4f4;
    width: 150px;
`;

export const Name = styled.p`
    color: #000;
    font-size: 24px;
    font-weight: 500;
`;

export const Tag = styled.p`
    font-size: 18px;
`;

export const Location = styled.p`
    font-size: 18px;
`;

export const Stats = styled.ul`
    display: flex;
`;

export const StatsItem = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 10px;
    border: 1px solid #EEEEEE;
    border-bottom: none;

    background-color: #f7f7f7;
`;

export const Quantity = styled.span`
    font-size: 20px;
    font-weight: 500;

    color: #000;
`;