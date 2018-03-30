// @flow
import styled from 'styled-components'
import * as React from 'react'

// Mock function to use styleType
const makeStyles = ({styleType}) => ''

export type ButtonPropTypes = {
  styleType: 'safe' | 'info' | 'warning' | 'danger' | 'link',
  isPill: boolean,
  isThin: boolean,
};

export const ButtonStyled = (styled.button`
  ${makeStyles}
  ${({isPill}) => isPill ? 'display: block;' : ''}
  ${({isThin}) => isThin ? 'height: 10px;' : 'height: 100px;'}
`: React.ComponentType<ButtonPropTypes>)

const CorrectUsage = <ButtonStyled styleType="safe" isPill isThin/>

const CausesError = <ButtonStyled styleType="oops" isPill isThin/> // error

const CausesError2 = <ButtonStyled styleType="safe" isPill="abc" isThin={123}/> // error
