import './globals.css'; // optional: your global styles
import Heading from './components/Heading';
import SideBar from './components/SideBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  );
}