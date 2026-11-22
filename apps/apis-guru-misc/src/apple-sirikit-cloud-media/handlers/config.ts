import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app.openapi(getConfigurationRoute, (c) => {
  throw new Error('Not implemented')
})
