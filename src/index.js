/* eslint-disable import/no-unassigned-import */

import React from 'react'
import ReactPDF, { Document, Text, View, Link } from '@react-pdf/react-pdf'

import data from '../data'
import {
  Page,
  Headline,
  Tagline,
  Heading,
  Small,
  Label,
  Box,
  Flex,
  Section
} from './styles'
import validate from './schema'

const validation = validate(data)

if (validation.errors.length > 0) {
  throw new Error(`
    You're data did not match the required schema:

    ${validation.errors.map(x => `${x.message}\n`)}
  `)
}

const get = (obj, key, fallback) => {
  if (!obj) return fallback

  return (
    key
      .split('.')
      .reduce((state, x) => (state && state[x] ? state[x] : null), obj) ||
    fallback
  )
}

const Employment = () => (
  <Section>
    <Heading mr="20px">Employment</Heading>

    {get(data, 'employment', []).map(
      ({ company, title, description, location, start }) => (
        <View key={location}>
          <Small bold>{title}</Small>
          <Small>{company}</Small>
          <Small>{description}</Small>
          <Small>{location}</Small>
          <Small>{start}</Small>
        </View>
      )
    )}
  </Section>
)

const Education = () => (
  <Section>
    <Heading mr="20px">Education</Heading>

    {get(data, 'education', []).map(
      ({ company, title, description, location, start }) => (
        <View key={location}>
          <Small bold>{title}</Small>
          <Small>{company}</Small>
          <Small>{description}</Small>
          <Small>{location}</Small>
          <Small>{start}</Small>
        </View>
      )
    )}
  </Section>
)

const cv = (
  <Document>
    <Page>
      <View>
        <Headline>{data.name}</Headline>
        <Tagline>{data.tagline}</Tagline>

        <Flex mt="10px">
          <Box>
            <Label>Email Address</Label>
            <Small>
              <Link src={`mailto:${data.email}`}>{data.email}</Link>
            </Small>
          </Box>

          <Box>
            <Label>Website</Label>
            <Small>
              <Link src={data.website}>{data.website}</Link>
            </Small>
          </Box>

          <Box>
            <Label>Phone Number</Label>
            <Small>
              <Link src={data.phone_number}>{data.phone_number}</Link>
            </Small>
          </Box>

          <Box>
            <Label>Date of Birth</Label>
            <Small>{data.date_of_birth}</Small>
          </Box>
        </Flex>

        <Education />
        <Employment />
      </View>
    </Page>
  </Document>
)

ReactPDF.render(cv, `${__dirname}/../output.pdf`)
