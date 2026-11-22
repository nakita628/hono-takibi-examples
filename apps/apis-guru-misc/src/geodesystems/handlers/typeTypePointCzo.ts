import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointCzoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointCzoHandler = app.openapi(
  getRepositorySearchTypeTypePointCzoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
