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
      <body className='min-h-screen flex flex-row p-6'>
        <nav className='bg-gray-100 grow p-2 rounded-lg'>
          <SideBar />  
        </nav>
        <main className='grow-2 p-2'>
          <Heading />
          {children}
        </main>
      </body>
    </html>
  );
}