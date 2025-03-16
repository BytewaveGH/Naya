import React, { Fragment } from 'react'
import Link from 'next/link'
import { LeftNavCategory, RightNavCategory } from '../logics/data'
import m from '@/assets/images/m.webp'
import Image from 'next/image'

const TopNav = () => {
  return (
    <main className="w-full bg-red-500">
      <nav className="flex items-center justify-evenly w-full h-16 bg-gray-800 px-6">
        <aside className="flex items-center space-x-6">
          {LeftNavCategory.map(({ id, link, name }) => {
            return (
              <Fragment key={id}>
                <Link href={link} className="text-white hover:text-gray-300 naya-sub-heading">
                  {name}
                </Link>
              </Fragment>
            )
          })}
        </aside>

        <section>
          <Image src={m} alt="Logo" width={50} />
        </section>

        <aside className="flex items-center space-x-6">
          {RightNavCategory.map(({ id, link, name }) => {
            return (
              <Fragment key={id}>
                <Link href={link} className="text-white hover:text-gray-300 naya-sub-heading">
                  {name}
                </Link>
              </Fragment>
            )
          })}

          {/* account and watchlist icon */}
        </aside>
      </nav>
    </main>
  )
}

export default TopNav
