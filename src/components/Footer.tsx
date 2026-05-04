import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <div className="text-2xl font-display font-extrabold tracking-[0.2em] text-white mb-8">
            UFOR<span className="text-gold">ZA</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            The peak of human performance. We curate elite biological and lifestyle solutions for men who refuse to settle for anything less than absolute mastery.
          </p>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-8">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/gym" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Gym: Power</Link></li>
            <li><Link to="/vitality" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Vitality: Home</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Join Elite</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-8">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-widest">Elite Membership</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-[10px] tracking-[0.2em] text-gray-600 uppercase">
        <p>© {new Date().getFullYear()} UFORZA PERFORMANCE. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">THE RESULT OF POWER.</p>
      </div>
    </footer>
  );
}
