import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourceMigrationsRetrieveLatestRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceMigrationsHandler = app.openapi(
  getResourceMigrationsRetrieveLatestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
