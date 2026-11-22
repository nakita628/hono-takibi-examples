import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LocalizationOptionsRoute, getApiV1LocalizationRoute } from '../routes'

const app = new OpenAPIHono()

export const localizationHandler = app
  .openapi(getApiV1LocalizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocalizationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
