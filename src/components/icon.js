import React, { memo } from 'react'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { POSITION } from '../constants'

const reversePosition = pos => {
  if (pos === POSITION.LEFT) {
    return POSITION.RIGHT
  }
  return POSITION.LEFT
}

const PaddingArea = styled.div.attrs({
  dataRole: 'icon'
})`
  display: inline-block;
  ${props => props.alone ? '' : `padding-${reversePosition(props.pos)}: .1rem;`}
`

const icon = props => {
  const {
    color,
    size,
    verticalAlign,
    position,
    alone,
    component: Icon
  } = props
  return (
    <IconContext.Provider
      value={{
        color,
        size,
        style: { verticalAlign }
      }}
    >
      <PaddingArea pos={position} alone={alone}>
        <Icon />
      </PaddingArea>
    </IconContext.Provider>
  )
}

icon.defaultProps = {
  color: 'purple',
  size: '1.2rem',
  verticalAlign: 'middle',
  position: POSITION.LEFT,
  alone: false
}

export default memo(icon)
