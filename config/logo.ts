// Centralized icon imports for all features
import {
  Hand,
  Users,
  Activity,
  Waves,
  BookOpen,
  History,
  Anchor,
  TreePine,
  Camera,
  Book,
  MapPin,
  Pencil,
} from 'lucide-react'


export const logoIconMap = {
  Hand,
  Users,
  Activity,
  Waves,
  BookOpen,
  History,
  Anchor,
  TreePine,
  Camera,
  Pencil,
  Book,
  MapPin,
} as const

export type IconName = keyof typeof logoIconMap
