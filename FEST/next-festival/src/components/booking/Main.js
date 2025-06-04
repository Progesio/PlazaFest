import React, { useState, useEffect } from "react";
import StepFacility from "./StepFacility";
import StepDateTime from "./StepDateTime";
import StepDetails from "./StepDetails";

const FACILITIES = [
    {
        key: "swimming",
        name: "Swimming Pool",
        price: 50000,
        color: "green",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 18v-2c0-2 4-3 6-3s6 1 6 3v2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 16c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 20c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
            </svg>
        ),
        bg: "bg-green-100",
    },
    {
        key: "basketball",
        name: "Basketball Court",
        price: 100000,
        color: "orange",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2a10 10 0 0110 10M12 2v20m0-20C6.477 2 2 6.477 2 12m20 0c0 5.523-4.477 10-10 10m0 0C6.477 22 2 17.523 2 12m10 10c5.523 0 10-4.477 10-10M2 12h20" />
            </svg>
        ),
        bg: "bg-orange-100",
    },
    {
        key: "tennis",
        name: "Tennis Court",
        price: 120000,
        color: "green",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.93 4.93c4.97-4.97 13.03-4.97 18 0M4.93 19.07c4.97 4.97 13.03 4.97 18 0M20.84 10.71c1.11-2.89.59-6.28-1.55-8.42M3.16 13.29c-1.11 2.89-.59 6.28 1.55 8.42" />
            </svg>
        ),
        bg: "bg-green-100",
    },
    {
        key: "badminton",
        name: "Badminton Court",
        price: 80000,
        color: "purple",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4l10 16m0-16L7 20" />
            </svg>
        ),
        bg: "bg-purple-100",
    },
];

const TIME_SLOTS = [
    { time: "08:00", label: "Morning", hour: 8 },
    { time: "09:00", label: "Morning", hour: 9 },
    { time: "10:00", label: "Morning", hour: 10 },
    { time: "11:00", label: "Afternoon", hour: 11 },
    { time: "12:00", label: "Afternoon", hour: 12 },
    { time: "13:00", label: "Afternoon", hour: 13 },
    { time: "14:00", label: "Afternoon", hour: 14 },
    { time: "15:00", label: "Afternoon", hour: 15 },
    { time: "16:00", label: "Booked", hour: 16, disabled: true },
    { time: "17:00", label: "Evening", hour: 17 },
    { time: "18:00", label: "Evening", hour: 18 },
    { time: "19:00", label: "Booked", hour: 19, disabled: true },
];

function getNextDates(count = 7, baseDate = new Date()) {
    const dates = [];
    for (let i = 0; i < count; i++) {
        const d = new Date(baseDate);
        d.setDate(baseDate.getDate() + i);
        dates.push(d);
    }
    return dates;
}

function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

function formatDateShort(date) {
    return date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
    });
}

function formatTimeRange(slots) {
    if (!slots.length) return "";
    const sorted = [...slots].sort((a, b) => a.hour - b.hour);
    return `${sorted[0].time} - ${sorted[sorted.length - 1].time}`;
}

function getDuration(slots) {
    if (!slots.length) return 0;
    const sorted = [...slots].sort((a, b) => a.hour - b.hour);
    return sorted[sorted.length - 1].hour - sorted[0].hour + 1;
}

function getPrice(facility, slots) {
    if (!facility || !slots.length) return 0;
    const f = FACILITIES.find((f) => f.key === facility);
    return f ? f.price * slots.length : 0;
}

export default function BookingMain() {
    const [step, setStep] = useState(1);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [personal, setPersonal] = useState({ fullName: "", email: "", phone: "" });
    const [payment, setPayment] = useState("creditCard");

    useEffect(() => {
        // Inisialisasi tanggal hanya di client
        const today = new Date();
        const nextDates = getNextDates(7, today);
        setDates(nextDates);
        setSelectedDate(nextDates[0]);
    }, []);

    // Step 1: Facility selection
    const handleFacilityClick = (key) => {
        setSelectedFacility(key);
    };

    // Step 2: Date & Time selection
    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedSlots([]); // reset slots on date change
    };

    const handleSlotClick = (slot) => {
        if (slot.disabled) return;
        // Only allow consecutive selection
        let newSlots = [...selectedSlots];
        const exists = newSlots.find((s) => s.time === slot.time);
        if (exists) {
            newSlots = newSlots.filter((s) => s.time !== slot.time);
        } else {
            newSlots.push(slot);
            newSlots.sort((a, b) => a.hour - b.hour);
            // Check if all are consecutive
            for (let i = 1; i < newSlots.length; i++) {
                if (newSlots[i].hour !== newSlots[i - 1].hour + 1) {
                    return; // not consecutive, ignore
                }
            }
        }
        setSelectedSlots(newSlots);
    };

    const clearSlots = () => setSelectedSlots([]);

    // Step 3: Personal info & payment
    const handlePersonalChange = (e) => {
        setPersonal({ ...personal, [e.target.id]: e.target.value });
    };

    const handlePaymentChange = (e) => setPayment(e.target.value);

    // Step navigation
    const goToStep = (n) => setStep(n);

    // Booking summary
    const facilityObj = FACILITIES.find((f) => f.key === selectedFacility);
    const duration = getDuration(selectedSlots);
    const price = getPrice(selectedFacility, selectedSlots);

    return (
        <main className="pt-16 pb-20 px-4">
            {/* Page Title */}
            <div className="mb-6">
                <h1 className="text-xl font-bold text-gray-800">Book a Facility</h1>
                <p className="text-gray-600 text-sm">Select a facility, date, and time to book your ticket</p>
            </div>

            {/* Booking Steps */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${step === 1 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"} flex items-center justify-center text-sm font-medium`}>1</div>
                    <span className={`text-xs mt-1 ${step === 1 ? "text-green-600 font-medium" : "text-gray-500"}`}>Facility</span>
                </div>
                <div className="h-0.5 flex-grow bg-gray-300 mx-2"></div>
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${step === 2 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"} flex items-center justify-center text-sm font-medium`}>2</div>
                    <span className={`text-xs mt-1 ${step === 2 ? "text-green-600 font-medium" : "text-gray-500"}`}>Date & Time</span>
                </div>
                <div className="h-0.5 flex-grow bg-gray-300 mx-2"></div>
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${step === 3 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"} flex items-center justify-center text-sm font-medium`}>3</div>
                    <span className={`text-xs mt-1 ${step === 3 ? "text-green-600 font-medium" : "text-gray-500"}`}>Details</span>
                </div>
            </div>

            {/* Step 1: Facility Selection */}
            {step === 1 && (
                <StepFacility
                  selectedFacility={selectedFacility}
                  onSelect={setSelectedFacility}
                  onNext={() => setStep(2)}
                  FACILITIES={FACILITIES}
                />
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
                <StepDateTime
                  selectedFacility={selectedFacility}
                  facilityObj={facilityObj}
                  dates={dates}
                  selectedDate={selectedDate}
                  onDateClick={setSelectedDate}
                  TIME_SLOTS={TIME_SLOTS}
                  selectedSlots={selectedSlots}
                  onSlotClick={handleSlotClick}
                  clearSlots={clearSlots}
                  goToStep={setStep}
                  onNext={() => setStep(3)}
                />
            )}

            {/* Step 3: Booking Details */}
            {step === 3 && (
                <StepDetails
                  facilityObj={facilityObj}
                  selectedDate={selectedDate}
                  formatDate={formatDate}
                  selectedSlots={selectedSlots}
                  formatTimeRange={formatTimeRange}
                  duration={duration}
                  price={price}
                  personal={personal}
                  handlePersonalChange={handlePersonalChange}
                  payment={payment}
                  handlePaymentChange={handlePaymentChange}
                  goToStep={setStep}
                  onConfirm={() => alert("Booking confirmed!")}
                />
            )}
        </main>
    );
}