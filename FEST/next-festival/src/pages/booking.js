import { useState } from "react";
import Header from "../components/Header";
import UserPopup from "../components/UserPopup";
import MainNav from "../components/MainNav";
import HeroBanner from "../components/HeroBanner";
import QuickAccess from "../components/QuickAccess";
import NewsSection from "../components/NewsSection";

import BookingMain from '../components/booking/Main';

export default function BookingPage() {

     const [popupOpen, setPopupOpen] = useState(false);
    
      return (
        <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
          <Header onMenuClick={() => setPopupOpen(true)} />
          <UserPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
          {popupOpen && (
            <div
              id="overlay"
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setPopupOpen(false)}
            />
          )}
          <MainNav />
          <main className="pt-16 pb-20 px-4 mt-3">
            <BookingMain />
          </main>
        </div>
    );
}