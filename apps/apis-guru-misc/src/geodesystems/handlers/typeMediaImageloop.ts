import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaImageloopRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaImageloopHandler = app.openapi(
  getRepositorySearchTypeMediaImageloopRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
