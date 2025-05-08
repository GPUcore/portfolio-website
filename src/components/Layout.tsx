import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Nathan the destroyer of worlds
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </Link>
              <Link href="/#skills" className="text-gray-600 hover:text-gray-900">
                Skills
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© {new Date().getFullYear()} Nathan the destroyer of worlds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 