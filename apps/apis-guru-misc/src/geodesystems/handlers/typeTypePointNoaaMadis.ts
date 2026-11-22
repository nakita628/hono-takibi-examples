import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointNoaaMadisRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointNoaaMadisHandler = app.openapi(
  getRepositorySearchTypeTypePointNoaaMadisRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
