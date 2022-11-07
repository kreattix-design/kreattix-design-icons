import * as React from 'react'
import { SVGProps } from 'react'
const SvgUpSquareToned = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.7}
      y={0.7}
      width={22.6}
      height={22.6}
      rx={2.1}
      fill="currentColor"
      fillOpacity={0.25}
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <path
      d="M6.667 14 12 8.667M12 8.667 17.333 14"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)
export default SvgUpSquareToned
