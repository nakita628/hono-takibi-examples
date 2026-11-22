import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectCasestudyRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectCasestudyHandler = app.openapi(
  getRepositorySearchTypeProjectCasestudyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
