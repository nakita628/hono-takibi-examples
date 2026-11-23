import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetUploadedDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const getUploadedDocumentsHandler = app.openapi(postGetUploadedDocumentsRoute, (c) => {
  throw new Error('Not implemented')
})
