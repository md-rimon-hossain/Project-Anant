import { FC } from 'react';

const Footer: FC = () => {

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Project Anant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;