export default function UserPopup({ open, onClose }) {
  return (
    <div
      id="userPopup"
      className={`user-popup fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-40 p-5 transition-transform duration-300 ease-in-out ${open ? "show" : ""}`}
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="bg-green-600 rounded-full h-12 w-12 flex items-center justify-center text-white text-xl font-bold">
            U
          </div>
          <div className="ml-3">
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-gray-500">user@email.com</p>
          </div>
        </div>
        <button
          id="closePopupBtn"
          className="text-gray-500"
          onClick={onClose}
          aria-label="Close user menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="mb-4">
            <a href="/www/Booking.html" className="flex items-center p-2 hover:bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Booking
            </a>
          </li>
          <li className="mb-4">
            <a href="/www/member.html" className="flex items-center p-2 hover:bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              Show Barcode
            </a>
          </li>
          <li className="mb-4">
            <a href="/www/tiket.html" className="flex items-center p-2 hover:bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Your Ticket
            </a>
          </li>
          <li className="mb-4">
            <a href="/www/transaksi.html" className="flex items-center p-2 hover:bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Transaction
            </a>
          </li>
          <li className="mb-4">
            <a href="/www/setting.html" className="flex items-center p-2 hover:bg-green-50 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
