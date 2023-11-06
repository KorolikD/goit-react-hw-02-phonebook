import styled from 'styled-components';

export const ListContacts = styled.ul`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 16px;
  padding: 4px;
  font: inherit;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  min-width: 250px;
  height: 24px;
  text-align: center;
  gap: 18px;

  font: inherit;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;

  font: inherit;
`;

export const FilterButton = styled.button`
  padding-right: ${p => p.theme.spacing(2)};
  padding-left: ${p => p.theme.spacing(2)};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.small};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.animation.cubicBezier};
  }
`;
