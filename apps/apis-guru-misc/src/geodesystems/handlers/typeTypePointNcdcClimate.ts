import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNcdcClimateRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNcdcClimateHandler = app.openapi(
  getRepositorySearchTypeTypePointNcdcClimateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
