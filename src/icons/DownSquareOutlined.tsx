import * as React from 'react'
import { SVGProps } from 'react'
const SvgDownSquareOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <path
      d="M6.667 10 12 15.333M12 15.333 17.333 10"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)
export default SvgDownSquareOutlined
