import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigurationRoute, putConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
