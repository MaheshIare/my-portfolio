import './globals.css';
import { ThemeProviderWrapper } from '../components/theme-provider';

export const metadata = {
  title: 'Mahesh Kumar Gutam Portfolio',
  description: "Showcasing Mahesh Kumar Gutam's experience, skills, and projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}