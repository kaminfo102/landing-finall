'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Moon, Sun, Brain, Calendar, Users, Trophy,
  Phone, Mail, MessageCircle, Lightbulb, Target,
  Zap, Award, Star, CheckCircle2, Send,
  Menu, X, ArrowUp
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { HeroSlider } from './components/hero-slider';
import { BenefitCard, BenefitCardProps} from './components/benefit-card';
import { TestimonialCard } from './components/testimonial-card';
import { PromoDialog } from './components/promo-dialog';
import { MainNav } from './components/main-nav';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const kurdistanCities = [
  'سنندج',
  'سقز',
  'مریوان',
  'بانه',
  'قروه',
  'کامیاران',
  'بیجار',
  'دهگلان',
  'دیواندره',
  'سروآباد'
];

const benefits: BenefitCardProps[] = [
  
  {
    
    icon: Lightbulb,
    title: 'تقویت حافظه',
    description: 'افزایش قدرت حافظه و تمرکز با تمرینات منظم و روش‌های علمی',
    image: '/images/sliders/1.jpg?auto=format&fit=crop&q=80',
    views: 1234,
    likes: 89,
   
      
      
      
  },
  {
    
    icon: Target,
    title: 'دقت بالا',
    description: 'پرورش دقت و سرعت عمل در محاسبات با تکنیک‌های پیشرفته',
    image: '/images/sliders/2.jpg',
    views: 987,
    likes: 76,
    
  },
  {
    
    icon: Zap,
    title: 'تفکر خلاق',
    description: 'پرورش خلاقیت و مهارت‌های حل مسئله با روش‌های نوین',
    image: '/images/sliders/3.jpg',
    views: 2156,
    likes: 143,
    
  },
];

const testimonials = [
  {
    name: 'سارا محمدی',
    role: 'مادر شرکت‌کننده',
    content: 'پس از شرکت در این مسابقات، اعتماد به نفس فرزندم در ریاضی به طور چشمگیری افزایش یافت.',
    image: '/images/sliders/4.jpg',
  },
  {
    name: 'علی رضایی',
    role: 'دانش‌آموز',
    content: 'محیط رقابتی مسابقات باعث شد تا با انگیزه بیشتری تمرین کنم.',
    image: '/images/sliders/5.jpg',
  },
  {
    name: 'مریم کریمی',
    role: 'معلم ریاضی',
    content: 'این مسابقات فرصت عالی برای کشف و پرورش استعدادهای ریاضی است.',
    image: '/images/sliders/6.jpg?auto=format&fit=crop&q=80',
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    
    toast({
      title: "پیام با موفقیت ارسال شد",
      description: "به زودی با شما تماس خواهیم گرفت",
      className: "bg-green-50 dark:bg-green-900 border-green-500",
      // icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const { theme } = useTheme();
  const cardStyle = theme === 'dark' ? 'glass-card' : 'bg-white shadow-lg';

  return (
    <div className="min-h-screen bg-background geometric-bg">
    {/* // <div className="min-h-screen bg-background geometric-bg flex items-center justify-center p-4 sm:p-6 md:p-8"> */}
      
      <MainNav />

      {/* Hero Section with Sliders */}
      <section id="hero" className="pt-24 pb-16 px-4 pr-0 pl-0">
        <div className="mx-auto m-0">
          <HeroSlider />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            className={`${cardStyle} p-8 rounded-2xl benefit-card hover:scale-105 transition-transform duration-300`}
          >
            <div className="icon-wrapper">
              <Calendar className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">تاریخ برگزاری</h3>
            <p className="text-muted-foreground">16 و 17 اسفند ۱۴۰۳</p>
          </motion.div>

          <motion.div
            className={`${cardStyle} p-8 rounded-2xl benefit-card hover:scale-105 transition-transform duration-300`}
          >
            <div className="icon-wrapper">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">رده‌های سنی</h3>
            <p className="text-muted-foreground">کلیه رده ها سنی</p>
          </motion.div>

          <motion.div
            className={`${cardStyle} p-8 rounded-2xl benefit-card hover:scale-105 transition-transform duration-300`}
          >
            <div className="icon-wrapper">
              <Trophy className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mt-6 mb-2">جوایز نفیس</h3>
            <p className="text-muted-foreground">5 نابغه برتر استان</p>
          </motion.div>
        </motion.div>
      </section>

       {/* FAQ Section */}
       <section id="faq" className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold text-center mb-12"
          >
            سوالات متداول
          </motion.h2>
          <Accordion
            type="single"
            collapsible
            className={`w-full max-w-2xl mx-auto ${cardStyle} rounded-2xl p-4`}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>شرایط شرکت در مسابقه چیست؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  همه فراگیران در هر رده سنی و ترمی که هستند می‌توانند در این مسابقه شرکت کنند.
                  
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li> تکمیل فرم ثبت‌نام آنلاین</li>
                  <li>تماس موسسه با شما جهت اخذ اطلعات تکمیلی ، تعیین سطح و ترم آزمون و راهنمایی های لازم</li>
                  <li>پیوستن به کانال مربوط به مسابقه و دریافت نمونه سوالات و تمرین</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>نحوه برگزاری مسابقه چگونه است؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  مسابقه به صورت آنلاین برگزار می شود:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>بسته به ترم و سطح فراگیر سوالات هر فراگیر متفاوت است</li>
                  <li>بلافاصله بعد از نهایی کردن پاسخنامه امتیاز فراگیر مشخص خواهد شد.</li>
                  <li>فراگیرانی که امتیاز یکسانی داشته باشند با برگزاری دوم نفرات برتر مشخص خواهد شد </li>
                  <li>امتیاز کلیه فراگیران در پایان مسابقه در سایت درج خواهد شد </li>
                  <li>امتیاز فراگیر کاملا توسط برنامه محاسبه شده و بلافاصله نمایش داده می شود و هیچگونه دخالت دستی در آن امکان پذیر نخواهد بود </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>هزینه ثبت‌نام چقدر است؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  هزینه ثبت‌نام 95000 هزار تومان می‌باشد:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {/* <li>شرکت در مرحله مقدماتی</li>
                  <li>دسترسی به منابع آموزشی آنلاین</li>
                  <li>در صورت موفقیت، شرکت در مرحله نهایی</li>
                  <li>گواهی شرکت در مسابقه</li> */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold text-center mb-12"
          >
            مزایای محاسبات ذهنی
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold text-center mb-12"
          >
            نظرات شرکت‌کنندگان
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section
      <section id="faq" className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold text-center mb-12"
          >
            سوالات متداول
          </motion.h2>
          <Accordion
            type="single"
            collapsible
            className={`w-full max-w-2xl mx-auto ${cardStyle} rounded-2xl p-4`}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>شرایط شرکت در مسابقه چیست؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  دانش‌آموزان ۷ تا ۱۵ سال می‌توانند در این مسابقه شرکت کنند.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>تکمیل فرم ثبت‌نام آنلاین</li>
                  <li>ارائه رضایت‌نامه والدین</li>
                  <li>پرداخت هزینه ثبت‌نام</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>نحوه برگزاری مسابقه چگونه است؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  مسابقه در دو مرحله برگزار می‌شود:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>مرحله مقدماتی: آزمون آنلاین با سوالات چندگزینه‌ای</li>
                  <li>مرحله نهایی: آزمون حضوری با سوالات تشریحی</li>
                  <li>اعلام نتایج: حداکثر یک هفته پس از هر مرحله</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>هزینه ثبت‌نام چقدر است؟</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  هزینه ثبت‌نام ۱۵۰,۰۰۰ تومان می‌باشد که شامل موارد زیر است:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>شرکت در مرحله مقدماتی</li>
                  <li>دسترسی به منابع آموزشی آنلاین</li>
                  <li>در صورت موفقیت، شرکت در مرحله نهایی</li>
                  <li>گواهی شرکت در مسابقه</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-bold text-center mb-12"
          >
            تماس با ما
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              className={`${cardStyle} rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300`}
            >
              <motion.div className="flex items-center gap-4">
                <div className="icon-wrapper">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">تلفن تماس</h3>
                  <a href="tel:+989123456789" className="text-muted-foreground">
                  ۰۹۳۳۳۲۹۵۶۰۱
                  
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4">
                <div className="icon-wrapper">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">ایمیل</h3>
                  <a href="mailto:info@example.com" className="text-muted-foreground">
                    info.kurdskids@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4">
                <div className="icon-wrapper">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">واتساپ</h3>
                  <a href="https://wa.me/989123456789" className="text-muted-foreground">
                  ۰۹۳۳۳۲۹۵۶۰۱
                  </a>
                </div>
              </motion.div>
            </motion.div>

             {/* Contact Form */}
             <motion.form
              initial="hidden"
              whileInView="visible"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget as HTMLFormElement);
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  city: formData.get('city'),
                  message: formData.get('message'),
                };

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    setShowSuccess(true);
                    toast({
                      title: "پیام با موفقیت ارسال شد",
                      description: "به زودی با شما تماس خواهیم گرفت",
                      className: "bg-green-50 dark:bg-green-900 border-green-500",
                      // icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
                    });
                    setTimeout(() => setShowSuccess(false), 3000);
                  } else {
                    throw new Error('خطا در ارسال پیام');
                  }
                } catch (error) {
                  toast({
                    title: "خطا در ارسال پیام",
                    description: "لطفا دوباره تلاش کنید",
                    variant: "destructive",
                  });
                }
              }}
              className={`${cardStyle} rounded-2xl p-8 space-y-6 hover:scale-105 transition-transform duration-300`}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                  <Input name="name" className={cardStyle} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">شماره موبایل</label>
                  <Input
                    name="phone"
                    type="tel"
                    dir="ltr"
                    className={cardStyle}
                    pattern="^09\d{9}$"
                    placeholder="09123456789"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">شهرستان محل سکونت</label>
                  <Select name="city" required>
                    <SelectTrigger className={cardStyle}>
                      <SelectValue placeholder="انتخاب شهرستان" />
                    </SelectTrigger>
                    <SelectContent>
                      {kurdistanCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">پیام شما</label>
                  <Textarea name="message" className={`${cardStyle} min-h-[120px]`} required />
                </div>
              </div>

              <Button type="submit" className="w-full glow-button" disabled={showSuccess}>
                {showSuccess ? (
                  <motion.div initial="hidden" animate="visible" className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>پیام ارسال شد</span>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    <span>ارسال پیام</span>
                  </div>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          تمامی حقوق محفوظ است © ۱۴۰۳
        </div>
      </footer>

      {/* دکمه بازگشت به بالا */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-to-top"
        aria-label="بازگشت به بالا"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
    
  );
}