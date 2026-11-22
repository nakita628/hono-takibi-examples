import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeExtremesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeExtremesHandler = app.openapi(
  getRepositorySearchTypeTypeExtremesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
