import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAbbreviationJsonRoute,
  getTranslationsJsonRoute,
  getTranslationsTxtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationsHandler = app
  .openapi(getTranslationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTranslationsTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbbreviationJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
