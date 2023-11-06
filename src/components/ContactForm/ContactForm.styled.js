import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
`;

export const FormGroup = styled.label`
  position: relative;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  top: 80%;
  left: 0;
  color: ${p => p.theme.colors.red};
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  margin-top: 8px;
  width: 150px;
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.small};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.animation.cubicBezier};
  }
`;
