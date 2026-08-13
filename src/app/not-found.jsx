export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#110e0c] text-[#e8dfd8] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-4">404 - Page Not Found</h1>
      <p className="text-[#a0958d] mb-6">The hearth section you are looking for does not exist.</p>
      <a href="/" className="px-6 py-3 bg-[#d4af37] text-[#110e0c] font-medium rounded hover:bg-[#c29f2f] transition-colors">
        Return to Hearth
      </a>
    </div>
  );
}
