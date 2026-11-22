import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectVisitRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectVisitHandler = app.openapi(
  getRepositorySearchTypeProjectVisitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
