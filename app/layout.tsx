import './globals.css'; // optional: your global styles
import Heading from './components/Header/Heading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <Heading />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}