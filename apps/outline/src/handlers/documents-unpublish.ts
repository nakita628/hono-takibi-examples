import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsUnpublishRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsUnpublishHandler = app.openapi(postDocumentsUnpublishRoute, (c) => {
  throw new Error('Not implemented')
})
