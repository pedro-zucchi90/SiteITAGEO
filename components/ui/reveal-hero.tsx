'use client';

import React from 'react';
import { motion, type Variants, LazyMotion, domAnimation } from 'framer-motion';

interface RevealHeroProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function RevealHero({
  children,
  className = '',
  stagger = 0.1,
}: RevealHeroProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.2, // pequeno delay inicial para garantir que a página carregou
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Aqui usamos animate ao invés de whileInView
      >
        {React.Children.map(children, (child) => 
          child ? (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          ) : null
        )}
      </motion.div>
    </LazyMotion>
  );
}
