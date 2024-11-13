'use client';

import styled, { css } from 'styled-components';
import { Link as LinkElement } from '@/i18n/routing';

const buttonStyles = css`
  all: unset;

  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;

  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.colorName1};
`;

export const Button = styled.button`
  ${buttonStyles}
`;
export const Link = styled(LinkElement)`
  ${buttonStyles}
`;
