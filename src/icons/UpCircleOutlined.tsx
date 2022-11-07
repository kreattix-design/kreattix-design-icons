import * as React from 'react'
import { SVGProps } from 'react'
const SvgUpCircleOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={11.3} stroke="currentColor" strokeWidth={1.4} />
    <path
      d="M6.667 14 12 8.667M12 8.667 17.333 14"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </svg>
)
export default SvgUpCircleOutlined
