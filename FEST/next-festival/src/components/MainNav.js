import { useRouter } from "next/router";

export default function MainNav() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className="bg-white shadow-md fixed bottom-0 left-0 right-0 z-20">
      <div className="flex justify-around items-center">
        <a
          href="/"
          className={`nav-item flex flex-col items-center py-2 px-4 text-sm ${
            path === "/"
              ? "active text-green-600 border-b-2 border-green-400"
              : "text-gray-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </a>
        <a
          href="/booking"
          className={`nav-item flex flex-col items-center py-2 px-4 text-sm ${
            path === "/booking"
              ? "active text-green-600 border-b-2 border-green-400"
              : "text-gray-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Booking</span>
        </a>
        <a
          href="/www/tiket.html"
          className="nav-item flex flex-col items-center py-2 px-4 text-sm text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
          <span>Tickets</span>
        </a>
      </div>
    </nav>
  );
}
