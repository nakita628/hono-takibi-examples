import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointTextRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointTextHandler = app.openapi(
  getRepositorySearchTypeTypePointTextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
