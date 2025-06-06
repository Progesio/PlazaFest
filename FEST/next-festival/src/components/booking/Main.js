import React, { useState, useEffect } from "react";
import StepFacility from "./StepFacility";
import StepDateTime from "./StepDateTime";
import StepDetails from "./StepDetails";

function getNextDates(count = 7, baseDate = new Date()) {
    const dates = [];
    for (let i = 0; i < count; i++) {
        const d = new Date(baseDate);
        d.setDate(baseDate.getDate() + i);
        dates.push(d);
    }
    return dates;
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
                />
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
                <StepDateTime
                  selectedFacility={selectedFacility}
                  dates={dates}
                  selectedDate={selectedDate}
                  onDateClick={setSelectedDate}
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
                  selectedDate={selectedDate}
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