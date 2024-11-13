import { render, screen } from '@testing-library/react';
import pick from 'lodash/pick';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'styled-components';

import messages from '../messages/en.json';

import theme from '@/styles/theme';
import Page from '@/app/[locale]/page';

// If the tested component uses features from Next.js, you have to mock them.
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: () => ({ locale: 'en' }),
  useSelectedLayoutSegment: () => ({ locale: 'en' }),
}));

const Wrapper = () => {
  return (
    <NextIntlClientProvider locale='en' messages={pick(messages, ['HomePage'])}>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

describe('Page', () => {
  it('renders a heading', () => {
    render(<Wrapper />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
