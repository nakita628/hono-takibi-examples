import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const configurationsHandler = app.openapi(getConfigurationsRoute, (c) => {
  throw new Error('Not implemented')
})
