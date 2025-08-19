'use client';

import React from 'react';
import { motion, type Variants, LazyMotion, domAnimation } from 'framer-motion';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number; // tempo entre cada elemento
  initialDelay?: number; // delay antes de começar as animações
}

export function RevealSection({
  children,
  className = '',
  stagger = 0.1, // 100ms entre cada elemento
  initialDelay = 0,
}: RevealSectionProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: initialDelay,
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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
