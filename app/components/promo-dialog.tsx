'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';

export function PromoDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      >
        <motion.div
          className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-2xl max-w-md w-full"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full">
                <Gift className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              </div>

              <h2 className="text-2xl font-bold mb-4">پیشنهاد ویژه!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                ثبت‌نام در دوره مقدماتی محاسبات ذهنی با ۳۰٪ تخفیف شهریه
                <br />
                <span className="text-sm">فقط تا پایان این هفته</span>
              </p>

              <a
                href="/register"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                ثبت‌ نام با تخفیف
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}