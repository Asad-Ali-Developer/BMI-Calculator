import { useState } from 'react';

const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="NavBar bg-zinc-700/20 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="logo text-blue-600 font-bold text-xl">
              BMI Calculator
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-14">
              <a href="#home" className="text-blue-600 hover:text-blue-700 hover:scale-105 hover:transition text-md font-medium"> Home </a>
              <a href="https://small-cart.netlify.app/" className="text-blue-600 hover:text-blue-700 hover:scale-105 hover:transition rounded-md text-md font-medium"> Small-Cart </a>
              <a href="#about" className="text-blue-600 hover:text-blue-700 hover:scale-105 hover:transition rounded-md text-md font-medium"> About </a>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 hover:scale-105 hover:transition rounded-md text-md font-medium"> Contact Us </a>
              
            </div>
          </div>

          <div className="-mr-1 flex md:hidden sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white  focus:outline-none focus:bg-blue-700
              focus:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" color="#fff" fill="#fff" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`navMobile ${isOpen ? 'open' : ''} md:hidden sm:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-4">
          <a href="#home" className="text-blue-600 focus:text-bold focus:scale-110 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"> Home </a>
          <a href="https://calculator-using-react-ts.netlify.app/" className="text-blue-600 focus:text-bold focus:scale-110 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"> Calculator </a>
          <a href="#about" className="text-blue-600 focus:text-bold focus:scale-110 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"> About </a>
          <a href="#contact" className="text-blue-600 focus:text-bold focus:scale-110 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"> Contact </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
