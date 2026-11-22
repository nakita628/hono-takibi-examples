import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectGpsControlpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectGpsControlpointsHandler = app.openapi(
  getRepositorySearchTypeProjectGpsControlpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
