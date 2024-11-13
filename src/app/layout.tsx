import { StyleProvider } from '@/providers/styles';
import GlobalStyles from '@/styles/GlobalStyles';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StyleProvider>
          <GlobalStyles />
          {children}
        </StyleProvider>
      </body>
    </html>
  );
}
