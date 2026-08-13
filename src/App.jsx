import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FireProcess } from './components/FireProcess';
import { Philosophy } from './components/Philosophy';
import { FeaturedDish } from './components/FeaturedDish';
import { FourElements } from './components/FourElements';
import { MenuSection } from './components/MenuSection';
import { ChefSection } from './components/ChefSection';
import { HearthSection } from './components/HearthSection';
import { EveningTimeline } from './components/EveningTimeline';
import { GallerySection } from './components/GallerySection';
import { Testimonial } from './components/Testimonial';
import { ReservationSection } from './components/ReservationSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedDishForBooking, setSelectedDishForBooking] = useState(undefined);

  const handleSelectDish = (dishName) => {
    setSelectedDishForBooking(dishName);
    const reservationElement = document.getElementById('reservation');
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReservation = () => {
    const reservationElement = document.getElementById('reservation');
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0C0B] text-[#E6E1DA] font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Navigation Bar */}
      <Header onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 01 Wood, 02 Flame, 03 Smoke, 04 Plate Story */}
        <FireProcess />

        {/* Minimal Editorial Philosophy */}
        <Philosophy />

        {/* Featured Dish Showcase */}
        <FeaturedDish onSelectDish={handleSelectDish} />

        {/* Four Elements Foundation */}
        <FourElements />

        {/* Interactive Menu Section */}
        <MenuSection onReserveItem={handleSelectDish} />

        {/* Chef & Founder Chef Daniel */}
        <ChefSection />

        {/* Living Hearth Open Kitchen Experience */}
        <HearthSection onOpenReservation={handleOpenReservation} />

        {/* Evening Timeline */}
        <EveningTimeline />

        {/* Asymmetric Gallery */}
        <GallerySection />

        {/* Testimonial Quote */}
        <Testimonial />

        {/* Interactive Table Reservation Form */}
        <ReservationSection initialDish={selectedDishForBooking} />

        {/* Location & Opening Hours */}
        <VisitSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
