import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentXlsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentXlsHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentXlsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
