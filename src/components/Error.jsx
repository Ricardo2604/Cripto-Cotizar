import React from 'react'
import styled from '@emotion/styled'

const TextoError = styled.div`
  background-color: #ff0000;
  color: #ffffff;
  padding: 15px;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  border-radius: 6px;
  margin-top: 10px;
  text-align: center;
  text-transform: uppercase;
`


const Error = ({children}) => {
  return (
    <TextoError>
      {children}
    </TextoError>
  )
}

export default Error
