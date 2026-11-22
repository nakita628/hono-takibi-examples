import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsStopRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsStopHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsStopRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
