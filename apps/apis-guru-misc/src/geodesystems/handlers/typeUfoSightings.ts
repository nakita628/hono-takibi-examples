import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeUfoSightingsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeUfoSightingsHandler = app.openapi(
  getRepositorySearchTypeUfoSightingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
