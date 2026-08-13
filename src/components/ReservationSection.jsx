import React, { useState } from 'react';
import { Calendar, Clock, Users, Flame, CheckCircle, AlertCircle, Phone, Mail, User } from 'lucide-react';

export const ReservationSection = ({ initialDish }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    time: '19:00',
    guests: '2',
    seating: 'Open Hearth Counter',
    specialRequests: initialDish ? `Interested in trying: ${initialDish}` : ''
  });

  const [status, setStatus] = useState('idle');
  const [refCode, setRefCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number (e.g. +250 788 123 456).');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    setTimeout(() => {
      const randomCode = 'EO-KGL-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(randomCode);
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="reservation" className="py-24 lg:py-36 bg-[#0D0C0B] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="border border-[#2A2520] bg-[#141210] p-8 sm:p-12 lg:p-16 relative">
          
          {/* Top Label */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0C0B] border border-[#C85832]/40 text-[#C85832]">
              <Flame className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
                Table Booking · Kigali Heights
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFEA] font-light">
              Reserve your table.
            </h2>
            <p className="text-sm text-[#A39D93] max-w-lg mx-auto font-light leading-relaxed">
              Join us for a live-fire dining experience in Kigali. Reservations are recommended for hearth counter sittings and terrace dining.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 space-y-6 max-w-lg mx-auto animate-fadeIn">
              <CheckCircle className="w-16 h-16 text-[#C85832] mx-auto" />
              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#F3EFEA]">
                  Your table request has been received.
                </h3>
                <p className="text-sm text-[#A39D93] leading-relaxed">
                  Thank you, <span className="text-[#F3EFEA] font-medium">{formData.fullName}</span>. We'll confirm your reservation shortly via email or phone for <span className="text-[#F3EFEA]">{formData.guests} guests</span> on <span className="text-[#F3EFEA]">{formData.date}</span> at <span className="text-[#F3EFEA]">{formData.time}</span>.
                </p>
              </div>

              <div className="p-4 bg-[#0D0C0B] border border-[#C85832]/40 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39D93] block">
                  Booking Confirmation Ref (Demo)
                </span>
                <span className="font-mono text-xl text-[#C85832] font-bold">
                  {refCode}
                </span>
              </div>

              <p className="text-xs text-[#A39D93]">
                Our host team in Kigali Heights will reach out to confirm your table preference.
              </p>

              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 border border-[#2A2520] hover:border-[#C85832] text-xs uppercase tracking-[0.2em] text-[#F3EFEA] transition-colors cursor-pointer"
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {errorMessage && (
                <div className="p-4 bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#C85832]" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C85832]" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors"
                  >
                    <option value="12:00">12:00 — Lunch Sitting</option>
                    <option value="13:30">13:30</option>
                    <option value="18:00">18:00 — Early Evening</option>
                    <option value="19:00">19:00 — Prime Hearth</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00 — Late Sitting</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#C85832]" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests (Large Party)</option>
                    <option value="8">8+ Guests (Group Booking)</option>
                  </select>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#C85832]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Eric Mugisha"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#A39D93]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C85832]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="eric@example.rw"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#A39D93]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C85832]" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+250 788 123 456"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#A39D93]/40"
                  />
                </div>
              </div>

              {/* Seating Preference */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium block">
                  Seating Experience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Open Hearth Counter', 'Main Dining Floor', 'Terrace View'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, seating: option })}
                      className={`p-3 text-xs uppercase tracking-[0.15em] border transition-all text-center cursor-pointer ${
                        formData.seating === option
                          ? 'border-[#C85832] bg-[#C85832]/10 text-[#F3EFEA]'
                          : 'border-[#2A2520] bg-[#0D0C0B] text-[#A39D93] hover:border-[#A39D93]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#A39D93] font-medium block">
                  Special Requests or Preferred Dishes
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  placeholder="Dietary preferences, birthday notes, or dishes you wish to request..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full bg-[#0D0C0B] border border-[#2A2520] focus:border-[#C85832] text-[#F3EFEA] px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[#A39D93]/40"
                />
              </div>

              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-12 py-4 bg-[#C85832] hover:bg-[#B24B27] text-[#F8F5F0] text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50 min-h-[52px]"
                >
                  {status === 'submitting' ? 'Submitting Request...' : 'Request Table Reservation'}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
