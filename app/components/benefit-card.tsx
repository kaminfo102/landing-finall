'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  views: number;
  likes: number;
}


export function BenefitCard({ icon: Icon, title, description, image, views, likes }: BenefitCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      className="benefit-card overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="icon-wrapper">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-primary text-primary' : ''}`} />
              <span>{likeCount}</span>
            </button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-5 w-5" />
              <span>{views}</span>
            </div>
          </div>
          
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        
         <Button className="w-full glow-button" onClick={()=>
         <Link 
         href={`/articles/`}
         className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
>
 
</Link> 

         }>
          بیشتر بدانید
        </Button>
        
        
      </div>
    </motion.div>
  );
}