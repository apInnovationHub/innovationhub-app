import './globals.css';

export const metadata = {
  title: 'All Peoples Innovation Hub',
  description: 'Driving Innovation, Shaping the Future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}