import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LocalizationLanguageRoute, getApiV3LocalizationRoute } from '../routes'

const app = new OpenAPIHono()

export const localizationHandler = app
  .openapi(getApiV3LocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LocalizationLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
