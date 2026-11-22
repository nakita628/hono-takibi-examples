import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationBookChapterShaRoute,
  getAbbreviationBookChaptersShaRoute,
  getAbbreviationBookChecksumJsonRoute,
  getAbbreviationBookChecksumShaRoute,
  getAbbreviationBookChecksumTxtRoute,
  getAbbreviationBookShaRoute,
  getAbbreviationBooksShaRoute,
  getAbbreviationChecksumJsonRoute,
  getAbbreviationChecksumShaRoute,
  getAbbreviationChecksumTxtRoute,
  getAbbreviationShaRoute,
  getChecksumJsonRoute,
  getChecksumShaRoute,
  getChecksumTxtRoute,
  getOpenapiShaRoute,
  getTranslationsShaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksumsHandler = app
  .openapi(getTranslationsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksumJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksumTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksumShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBooksShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationChecksumJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationChecksumTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationChecksumShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChaptersShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChecksumJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChecksumTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChecksumShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChapterShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiShaRoute, (c) => {
    throw new Error('Not implemented')
  })
