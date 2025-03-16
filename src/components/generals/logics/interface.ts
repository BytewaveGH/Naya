import { StaticImageData } from 'next/image'

export interface NavCategoryTypes {
  id: number
  name: string
  icon: string | StaticImageData
  link: string
}
