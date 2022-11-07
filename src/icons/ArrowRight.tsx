import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.6 12.601-7.999 8a.85.85 0 1 1-1.202-1.202l6.549-6.549H2a.85.85 0 0 1 0-1.7h17.948l-6.549-6.549a.85.85 0 1 1 1.202-1.202l8 8a.847.847 0 0 1 .002 1.2"
      fill="currentColor"
    />
  </svg>
)
export default SvgArrowRight
