import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LanguageIdRoute, getApiV1LanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const languageHandler = app
  .openapi(getApiV1LanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
