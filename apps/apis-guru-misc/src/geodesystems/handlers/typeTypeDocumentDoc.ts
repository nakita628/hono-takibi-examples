import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentDocRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentDocHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentDocRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
