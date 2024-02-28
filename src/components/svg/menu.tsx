import type { FC } from 'react'
interface LogoProps {
  fillColor: string
}

const Menu: FC<LogoProps> = ({ fillColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill={fillColor}>
<g id="Menu / Menu_Alt_05">
<path id="Vector" d="M5 17H13M5 12H19M11 7H19" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
  )
}

export default Menu
