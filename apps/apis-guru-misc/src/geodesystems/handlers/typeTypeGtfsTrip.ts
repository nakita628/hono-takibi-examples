import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeGtfsTripRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeGtfsTripHandler = app.openapi(
  getRepositorySearchTypeTypeGtfsTripRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
