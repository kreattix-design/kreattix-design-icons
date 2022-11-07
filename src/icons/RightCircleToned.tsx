import * as React from 'react'
import { SVGProps } from 'react'
const SvgRightCircleToned = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 6.667 15.333 12M10 17.333 15.333 12"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)
export default SvgRightCircleToned
