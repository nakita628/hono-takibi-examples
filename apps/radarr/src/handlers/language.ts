import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LanguageIdRoute, getApiV3LanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const languageHandler = app
  .openapi(getApiV3LanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
