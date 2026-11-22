import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOpenaqRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOpenaqHandler = app.openapi(
  getRepositorySearchTypeTypePointOpenaqRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
