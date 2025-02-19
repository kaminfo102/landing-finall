'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  image: string;
}

export function TestimonialCard({ content, name, role, image }: TestimonialCardProps) {
  return (
    <motion.div
      className="testimonial-card relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-4 right-4">
        <Quote className="h-10 w-10 text-primary opacity-20" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground relative">
          <span className="text-3xl text-primary/20 font-serif">"</span>
          {content}
          <span className="text-3xl text-primary/20 font-serif">"</span>
        </p>
      </div>
    </motion.div>
  );
}