import { Page as PDF, Text, View } from '@react-pdf/react-pdf'
import styled from '@react-pdf/styled-components'
import { space } from 'styled-system'

// Style utils
const bold = p => p.bold && 'font-weight: 600'

export const Headline = styled(Text)`
  font-size: 26px;
  font-weight: bold;
`

export const Tagline = styled(Text)`
  font-size: 12px;
  font-style: italic;
`

export const Heading = styled(Text)`
  font-size: 12px;
  color: #888888;
  ${space};
`

export const Small = styled(Text)`
  font-size: 10px;

  ${bold};
`

export const Label = styled(Text)`
  font-size: 10px;
  color: #aaaaaa;
  margin-bottom: 5px;
`

export const Box = styled(View)`
  padding: 5px;
  flex: 3;
  ${space};
`

export const Flex = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  ${space};
`

export const Section = styled(Flex)`
  margin-bottom: 20px;
`

export const Page = styled(PDF).attrs({
  size: 'A4'
})`
  padding: 20px;
`
