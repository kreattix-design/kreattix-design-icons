import * as React from 'react'
import { SVGProps } from 'react'
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m15 4-8 8M15 20l-8-8" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
  </svg>
)
export default SvgLeft
