'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Share2, LucideProps } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export interface BenefitCardProps {
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
    setLikeCount(prev => (liked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      className="benefit-card overflow-hidden shadow-md"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
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
              <Heart
                className={`h-5 w-5 transition-colors ${
                  liked ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
              />
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

        <Link href={`/articles/`} passHref>
          <Button className="w-full glow-button">بیشتر بدانید</Button>
        </Link>
      </div>
    </motion.div>
  );
}
