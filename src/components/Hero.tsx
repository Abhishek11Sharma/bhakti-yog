import { motion } from 'framer-motion'


export default function Hero() {
    const letters = 'HARE KRISHNA'.split('')


    return (
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-bhakti-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-5xl mx-auto text-center px-4">
                <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold text-bhakti-700 dark:text-bhakti-300">
                    Bhakti Yog — Walk the path of devotion
                </motion.h2>


                <div className="mt-6 flex justify-center items-center gap-3 text-3xl md:text-5xl font-bold text-bhakti-600 dark:text-bhakti-200">
                    {letters.map((ch, i) => (
                        <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                            {ch}
                        </motion.span>
                    ))}
                </div>


                <p className="mt-6 text-gray-600 dark:text-gray-300">Daily practice, soulful community & resources to deepen your bhakti.</p>


                <div className="mt-8 flex gap-4 justify-center">
                    <a href="#naam-jap" className="px-5 py-3 rounded-md bg-bhakti-600 text-white font-semibold">Start Naam‑Jap</a>
                    <a href="/blogs" className="px-5 py-3 rounded-md border border-bhakti-200">Read Blogs</a>
                </div>
            </div>
        </section>
    )
}