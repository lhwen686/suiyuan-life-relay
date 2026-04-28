import { motion } from "framer-motion";
import type { Stat } from "../data/project";

type StatCardProps = {
  stat: Stat;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl border border-marrow-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lift sm:p-7 lg:min-h-56"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-marrow-700 via-pulse-300 to-clinic-700" />
      <p className="relative text-5xl font-black leading-none text-marrow-800 sm:text-6xl lg:text-7xl">{stat.value}</p>
      <h3 className="relative mt-5 text-xl font-black text-marrow-950 sm:text-2xl">{stat.label}</h3>
      <p className="relative mt-2 text-base font-semibold leading-7 text-marrow-600">{stat.emphasis}</p>
      <p className="relative mt-3 text-sm leading-6 text-stone-600 sm:text-base">{stat.description}</p>
    </motion.article>
  );
}
