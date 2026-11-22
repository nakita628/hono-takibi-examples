import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TranslationsLocaleCodeRoute,
  getV1TranslationsRoute,
  putV1TranslationsLocaleCodeRoute,
  putV1TranslationsLocaleCodeValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationsHandler = app
  .openapi(getV1TranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TranslationsLocaleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TranslationsLocaleCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TranslationsLocaleCodeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
