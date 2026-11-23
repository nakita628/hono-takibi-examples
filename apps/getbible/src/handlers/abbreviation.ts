import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationBookChapterJsonRoute,
  getAbbreviationBookChapterShaRoute,
  getAbbreviationBookChaptersJsonRoute,
  getAbbreviationBookChaptersShaRoute,
  getAbbreviationBookChaptersTxtRoute,
  getAbbreviationBookChecksumJsonRoute,
  getAbbreviationBookChecksumShaRoute,
  getAbbreviationBookChecksumTxtRoute,
  getAbbreviationBookJsonRoute,
  getAbbreviationBookShaRoute,
  getAbbreviationBooksJsonRoute,
  getAbbreviationBooksShaRoute,
  getAbbreviationBooksTxtRoute,
  getAbbreviationChecksumJsonRoute,
  getAbbreviationChecksumShaRoute,
  getAbbreviationChecksumTxtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abbreviationHandler = app
  .openapi(getAbbreviationBooksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBooksTxtRoute, (c) => {
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
  .openapi(getAbbreviationBookJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChaptersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChaptersTxtRoute, (c) => {
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
  .openapi(getAbbreviationBookChapterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChapterShaRoute, (c) => {
    throw new Error('Not implemented')
  })
