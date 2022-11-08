import { ReactNode } from 'react'

export type IconNames =
  | 'Logo'
  | 'Close'
  | 'Plus'
  | 'Left'
  | 'Right'
  | 'Up'
  | 'Down'
  | 'ArrowLeft'
  | 'ArrowRight'

export type IconNameListProps = {
  [key in IconNames]: string | ReactNode
}
