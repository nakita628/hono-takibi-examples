import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsRouteHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsRouteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
