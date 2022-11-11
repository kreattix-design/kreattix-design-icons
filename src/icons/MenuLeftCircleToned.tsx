import * as React from 'react'
import { SVGProps } from 'react'
const SvgMenuLeftCircleToned = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.333 7.333h13.334M5.333 12h13.334M5.333 16.667H12"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)
export default SvgMenuLeftCircleToned
