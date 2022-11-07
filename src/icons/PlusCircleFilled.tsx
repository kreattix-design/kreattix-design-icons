import * as React from 'react'
import { SVGProps } from 'react'
const SvgPlusCircleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm.85-19.333a.85.85 0 0 0-1.7 0v6.483H4.667a.85.85 0 0 0 0 1.7h6.483v6.483a.85.85 0 1 0 1.7 0V12.85h6.483a.85.85 0 1 0 0-1.7H12.85V4.667Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgPlusCircleFilled
