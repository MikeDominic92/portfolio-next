import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-32 flex justify-between items-center text-sm text-gray-500">
      <div> 2025 All rights reserved.</div>
      <div className="flex gap-6">
        <Link href="/about" className="hover:text-gray-800 transition-colors">
          About
        </Link>
        <Link href="/schedule" className="hover:text-gray-800 transition-colors">
          Schedule
        </Link>
        <Link href="/services" className="hover:text-gray-800 transition-colors">
          Services
        </Link>
      </div>
    </footer>
  );
}
