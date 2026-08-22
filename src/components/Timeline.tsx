import React from 'react';
import { Mail, Music2, Flower2, Cake, Wine, Mic2, ConciergeBell, Sparkles, Heart } from 'lucide-react';

const EventItem = ({ time, title, subtitle, Icon }: any) => (
  <div className="flex items-start gap-4 sm:gap-6 w-full">
    <div className="flex-shrink-0 mt-1">
      <Icon className="w-10 h-10 text-stone-800 stroke-[1px]" />
    </div>
    <div className="flex-1 flex items-start pt-2">
      <span className="font-serif text-base sm:text-lg text-stone-900 whitespace-nowrap min-w-[70px]">{time}</span>
      <div className="flex-1 border-b-2 border-dotted border-stone-300 mx-3 sm:mx-4 mt-3" />
      <div className="flex flex-col items-center min-w-[100px] sm:min-w-[120px]">
        <span className="font-serif text-base sm:text-lg text-stone-900 tracking-[0.15em] uppercase whitespace-nowrap">{title}</span>
        <span className="font-serif italic text-stone-500 text-xs sm:text-sm mt-1 text-center whitespace-pre-line">{subtitle}</span>
      </div>
    </div>
  </div>
);

const eventsRow1 = [
  { time: '9:00 AM', title: 'WE ARRIVE', subtitle: 'Guest Arrival', icon: Mail },
  { time: '12:45 PM', title: 'WE DANCE', subtitle: 'Dancing', icon: Music2 },
];
const eventsRow2 = [
  { time: '9:15 AM', title: 'WE PRAY', subtitle: 'Poruwa', icon: Flower2 },
  { time: '1:50 PM', title: 'WE CELEBRATE', subtitle: 'Cake Cutting', icon: Cake },
];
const eventsRow3 = [
  { time: '10:30 AM', title: 'WE OPEN', subtitle: 'Liquor Serve\n(Bar Open)', icon: Wine },
  { time: '2:00 PM', title: 'WE JAM', subtitle: 'Band Playing', icon: Mic2 },
];
const eventsRow4 = [
  { time: '12:00 PM', title: 'WE EAT', subtitle: 'Lunch', icon: ConciergeBell },
  { time: '3:30 PM', title: 'WE SLIP AWAY', subtitle: 'Grand Exit', icon: Sparkles },
];

export const Timeline = () => {
  return (
    <div className="bg-[#FCFAF8] py-24 sm:py-32 relative overflow-hidden flex justify-center">
      {/* Corner Florals */}
      <img src="/floral_corner.jpg" alt="" className="absolute top-0 left-0 w-64 sm:w-96 opacity-90 mix-blend-multiply" />
      <img src="/floral_corner.jpg" alt="" className="absolute top-0 right-0 w-64 sm:w-96 opacity-90 mix-blend-multiply scale-x-[-1]" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 flex flex-col items-center">
          <span className="uppercase tracking-[0.4em] text-stone-600 text-xs sm:text-sm font-serif mb-6">Wedding Day</span>
          <h2 className="text-4xl sm:text-6xl font-names text-stone-800 tracking-wider mb-8">WARSHA & MENNAN</h2>
          <div className="text-stone-500 font-serif text-sm sm:text-base tracking-[0.3em] uppercase">
            Timeline
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-stone-300" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {[eventsRow1, eventsRow2, eventsRow3, eventsRow4].map((row, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-12 md:gap-0">
                <div className="md:w-1/2 md:pr-12 lg:pr-16">
                  <EventItem {...row[0]} Icon={row[0].icon} />
                </div>
                <div className="md:w-1/2 md:pl-12 lg:pl-16 relative">
                  {/* Heart on the line, attached to the right column's border in theory, but we center it on the line */}
                  {idx === 3 && (
                    <div className="hidden md:flex absolute -left-[8px] -bottom-16 bg-[#FCFAF8] py-2 text-stone-400">
                      <Heart className="w-4 h-4 fill-stone-400" />
                    </div>
                  )}
                  <EventItem {...row[1]} Icon={row[1].icon} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative line for mobile */}
          <div className="md:hidden flex items-center justify-center gap-4 mt-16 text-stone-300">
             <div className="h-[1px] w-12 bg-stone-300" />
             <Heart className="w-4 h-4 fill-stone-400" />
             <div className="h-[1px] w-12 bg-stone-300" />
          </div>
        </div>

      </div>
    </div>
  );
};
