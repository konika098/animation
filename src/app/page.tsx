import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "#f0f0f0",
        padding: "2rem",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h1>Hello, Framer Motion with Next.js!</h1>
    </motion.div>
  );
}

