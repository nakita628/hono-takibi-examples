import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeServiceLinkRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeServiceLinkHandler = app.openapi(
  getRepositorySearchTypeTypeServiceLinkRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
