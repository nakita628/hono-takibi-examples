import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventConfigurationsResourceTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const eventConfigurationsResourceTypeHandler = app.openapi(
  getEventConfigurationsResourceTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
