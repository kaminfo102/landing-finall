'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '#hero', label: 'خانه' },
  { href: '#features', label: 'ویژگی‌ها' },
  { href: '#benefits', label: 'مزایا' },
  { href: '#testimonials', label: 'نظرات' },
  { href: '#faq', label: 'سوالات' },
  { href: '#contact', label: 'تماس' },
];

export function MainNav() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Brain className="h-10 w-10 text-primary floating" />
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              مسابقه محاسبات ذهنی
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-base font-medium transition-colors duration-300 hover:text-primary group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative overflow-hidden"
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
              </Button>
            )}
            
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:text-primary transition-colors"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden py-4 px-2"
            >
              <motion.div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    variants={itemVariants}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2 rounded-lg text-base font-medium transition-all duration-300
                             hover:bg-primary/10 hover:text-primary relative overflow-hidden
                             after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary
                             after:transform after:scale-x-0 after:transition-transform after:duration-300
                             hover:after:scale-x-100"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}