import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsDocumentsHandler = app.openapi(postDocumentsDocumentsRoute, (c) => {
  throw new Error('Not implemented')
})
