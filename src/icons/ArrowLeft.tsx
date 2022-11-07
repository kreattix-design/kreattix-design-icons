import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.4 12.601 7.999 8a.85.85 0 1 0 1.202-1.202L4.052 12.85H22a.85.85 0 0 0 0-1.7H4.052l6.549-6.549a.85.85 0 1 0-1.202-1.202l-8 8a.847.847 0 0 0-.002 1.2"
      fill="currentColor"
    />
  </svg>
)
export default SvgArrowLeft
