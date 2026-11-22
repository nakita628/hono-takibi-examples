import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectServiceHandler = app.openapi(
  getRepositorySearchTypeProjectServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
