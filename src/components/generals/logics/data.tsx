import { NavCategoryTypes } from './interface'
import necklace from '@/assets/images/e.webp'
import b from '@/assets/images/b.webp'
import d from '@/assets/images/d.webp'
import a from '@/assets/images/a.webp'

export const LeftNavCategory: NavCategoryTypes[] = [
  { id: 0, name: 'Rings', icon: 'home', link: '/' },
  { id: 1, name: 'Earings', icon: 'about', link: '/about' },
  { id: 2, name: 'Necklace', icon: 'contact', link: '/contact' },
  { id: 3, name: 'Bracelet', icon: 'services', link: '/services' },
]
export const RightNavCategory: NavCategoryTypes[] = [
  { id: 0, name: 'FAQ', icon: 'home', link: '/' },
  { id: 1, name: 'About', icon: 'about', link: '/about' },
  { id: 2, name: 'Contact', icon: 'contact', link: '/contact' },
]

export const Collections: NavCategoryTypes[] = [
  {
    id: 1,
    name: 'Necklaces',
    icon: necklace,
    link: '/collections/necklaces',
  },
  {
    id: 2,
    name: 'Rings',
    icon: b,
    link: '/collections/rings',
  },
  {
    id: 3,
    name: 'Bracelets',
    icon: d,
    link: '/collections/bracelets',
  },
  {
    id: 4,
    name: 'Earrings',
    icon: a,
    link: '/collections/earrings',
  },
]
