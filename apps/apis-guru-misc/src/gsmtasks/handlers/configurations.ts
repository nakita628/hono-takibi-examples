import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigurationsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const configurationsHandler = app.openapi(getConfigurationsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
