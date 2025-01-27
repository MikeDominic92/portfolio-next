'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
          michael.hoang@gmail.com
        </Link>
        <span className="text-sm text-gray-400">Early</span>
        <span className="text-sm text-gray-400">ET</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
          About
        </Link>
        <Link href="/schedule" className="text-sm hover:text-gray-600 transition-colors">
          Schedule
        </Link>
        <Link href="/services" className="text-sm hover:text-gray-600 transition-colors">
          Services
        </Link>
      </div>
    </nav>
  );
}
