import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDocumentPptRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDocumentPptHandler = app.openapi(
  getRepositorySearchTypeTypeDocumentPptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
