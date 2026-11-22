import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointSnotelRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointSnotelHandler = app.openapi(
  getRepositorySearchTypeTypePointSnotelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
