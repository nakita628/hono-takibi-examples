import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentCsvRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentCsvHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentCsvRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
