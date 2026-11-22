import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentHtmlRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentHtmlHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentHtmlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
