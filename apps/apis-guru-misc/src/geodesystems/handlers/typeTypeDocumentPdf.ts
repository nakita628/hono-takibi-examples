import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentPdfRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentPdfHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentPdfRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
