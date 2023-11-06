import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};

  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  text-align: center;

  color: ${p => p.theme.colors.dark};
`;

export const TitleH2 = styled.h1`
  margin-top: ${p => p.theme.spacing(6)};
  margin-bottom: ${p => p.theme.spacing(5)};

  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  text-align: center;

  color: ${p => p.theme.colors.dark};
`;
