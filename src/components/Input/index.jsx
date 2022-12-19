import React from 'react'
import { IconContainer, InputContainer, InputText } from './styles'
export const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText />
    </InputContainer>
  )
}

export default Input
