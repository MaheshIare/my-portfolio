import { ThemeProvider } from 'next-themes';
import './global.css'; // adjust path if needed
export const metadata = {
  title: 'Mahesh Kumar Gutam Portfolio',
  description: 'Showcasing Mahesh Kumar Gutam\'s experience, skills, and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
