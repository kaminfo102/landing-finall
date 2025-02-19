'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const slides = [
  {
    title: 'تقویت مهارت‌های ریاضی',
    description: 'با شرکت در مسابقات محاسبات ذهنی، مهارت‌های ریاضی خود را تقویت کنید',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80',
  },
  {
    title: 'رقابت سالم و هیجان‌انگیز',
    description: 'در فضایی دوستانه و رقابتی، استعدادهای خود را شکوفا کنید',
    image: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&q=80',
  },
];

const banners = [
  {
    title: 'ثبت‌نام با تخفیف ویژه',
    description: 'تا پایان هفته از ۳۰٪ تخفیف بهره‌مند شوید',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    buttonText: 'ثبت‌نام',
    buttonLink: '#register',
  },
  {
    title: 'دوره‌های آموزشی آنلاین',
    description: 'آموزش تکنیک‌های پیشرفته محاسبات ذهنی',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80',
    buttonText: 'مشاهده دوره‌ها',
    buttonLink: '#courses',
  },
];

export function HeroSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
      {/* Main Slider - Takes up 2 columns on large screens */}
      <div className="lg:col-span-2 h-full">
        <div ref={sliderRef} className="keen-slider h-full rounded-2xl overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl mb-8 max-w-2xl"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button size="lg" className="glow-button">
                    ثبت‌نام در مسابقه
                  </Button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banners - Takes up 1 column on large screens */}
      <div className="lg:col-span-1 flex flex-col gap-6 h-full">
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative h-[calc(50%-0.75rem)] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 backdrop-blur-sm hover:backdrop-blur-0 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
              <p className="text-sm mb-4 text-white/90">{banner.description}</p>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white"
                asChild
              >
                <a href={banner.buttonLink}>{banner.buttonText}</a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}