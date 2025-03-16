'use client'

// import { useTranslations } from 'next-intl';

import TopNav from '@/components/generals/widgets/top-nav'
import Image from 'next/image'
import land from '@/assets/images/land.webp'
import { Collections } from '@/components/generals/logics/data'
import ShoppingDisplay from '@/components/generals/widgets/shop'
import Footer from '@/components/generals/widgets/footer'

export default function HomePage() {
  // const t = useTranslations('HomePage');
  return (
    <main className="w-full h-full">
      <TopNav />
      <section className="w-full">
        <Image className="w-full h-full object-cover" src={land} alt="" />
      </section>

      <section className="w-full py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 naya-sub-heading">Explore Our Collections</h2>
          <p className="text-lg text-gray-600 mt-2 naya-paragraph">Discover timeless elegance in every piece.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 px-4">
          {Collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.link}
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={collection.icon}
                alt={collection.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold">{collection.name}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="w-full   py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <aside className="text-center md:text-left space-y-4">
            <h1 className=" font-bold tracking-wide naya-sub-heading">Highest Standards</h1>
            <p className="text-lg md:text-xl leading-relaxed naya-paragraph">
              We combine full-scale production with attention to detail, meeting the highest standards of quality.
            </p>
          </aside>

          {/* Right Icons Section */}
          <aside className="flex justify-center md:justify-end gap-6">
            {/* Replace with actual icons */}
            <div className="w-16 h-16 bg-white text-gray-900 flex items-center justify-center rounded-full shadow-lg">
              {/* Example Icon (Replace with actual icons) */}
              🏆
            </div>
            <div className="w-16 h-16 bg-white text-gray-900 flex items-center justify-center rounded-full shadow-lg">💎</div>
            <div className="w-16 h-16 bg-white text-gray-900 flex items-center justify-center rounded-full shadow-lg">🔒</div>
          </aside>
        </div>
      </section>

      <ShoppingDisplay />

      <Footer />
    </main>
  )
}
