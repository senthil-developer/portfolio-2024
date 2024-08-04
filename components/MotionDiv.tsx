"use client";

import { motion } from "framer-motion";

const MotionDiv = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};
export default MotionDiv;
