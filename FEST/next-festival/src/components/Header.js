import Image from "next/image";

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-30">
      <div className="flex justify-between items-center px-4 py-3">
        <button
          id="userMenuBtn"
          className="text-green-600"
          onClick={onMenuClick}
          aria-label="Open user menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-center">
          <Image src="/www/Logo.png" alt="logo" width={80} height={40} className="h-10 w-auto inline-block" />
        </div>
      </div>
    </header>
  );
}
