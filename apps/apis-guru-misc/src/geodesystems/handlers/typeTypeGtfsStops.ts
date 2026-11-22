import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsStopsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsStopsHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsStopsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
