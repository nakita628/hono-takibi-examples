import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsBusinessProfileRoute, postSettingsBusinessProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const businessProfileHandler = app
  .openapi(getSettingsBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
