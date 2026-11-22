import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationBookChapterJsonRoute,
  getAbbreviationBookChaptersJsonRoute,
  getAbbreviationBookChaptersTxtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chaptersHandler = app
  .openapi(getAbbreviationBookChaptersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChaptersTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationBookChapterJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
