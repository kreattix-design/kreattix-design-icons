import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowRightCircleToned = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={11.3}
      fill="currentColor"
      fillOpacity={0.25}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.452 12.325a.849.849 0 0 1-.184.276l-5.334 5.333a.85.85 0 0 1-1.202-1.202l3.883-3.882H5.333a.85.85 0 1 1 0-1.7h11.282l-3.883-3.882a.85.85 0 1 1 1.202-1.202l5.334 5.333a.848.848 0 0 1 .184.926Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgArrowRightCircleToned
