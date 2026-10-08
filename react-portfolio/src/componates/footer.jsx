
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left space-y-1">
                    <p className="text-sm text-gray-200 font-semibold">&copy; {currentYear} Martin. All rights reserved.</p>
                    <p className="text-xs text-gray-500">Built using architectural practices with React and modern CSS.</p>
                </div>

                <button
                    onClick={handleScrollTop}
                    className="inline-flex items-center px-3 py-2 border border-slate-700 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white transition"
                >
                    Back to Top <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
                </button>
            </div>
        </footer>
    );
}
