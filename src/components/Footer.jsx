import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 bg-slate-900/95 border-t border-slate-700 mt-auto backdrop-blur-md shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate-300 flex items-center gap-1.5">
            Developed with{' '}
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            {' '}by <span className="font-semibold text-indigo-400">Sazzad Islam</span>
          </p>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
