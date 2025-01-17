import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        Content here
      </div>
    </motion.section>
  );
}

