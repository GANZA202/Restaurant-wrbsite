import './globals.css';

export const metadata = {
  title: 'Ember & Oak — Live-Fire & Seasonal Kitchen | Kigali, Rwanda',
  description: 'A hearth kitchen in Kigali Heights, Rwanda, where hardwood charcoal embers and local ingredients bring out the true depth of wood-fired dining.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0D0C0B] text-[#E6E1DA] antialiased selection:bg-[#C87D4A]/30 selection:text-[#F3EFEA] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
