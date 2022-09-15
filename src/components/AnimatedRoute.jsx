import { motion } from "framer-motion";
function AnimatedRoute({ children, name }) {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.4 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedRoute;
 