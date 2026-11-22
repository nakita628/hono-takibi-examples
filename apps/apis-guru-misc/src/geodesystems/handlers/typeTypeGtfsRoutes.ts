import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsRoutesHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsRoutesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
