import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointInlineRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointInlineHandler = app.openapi(
  getRepositorySearchTypeTypePointInlineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
