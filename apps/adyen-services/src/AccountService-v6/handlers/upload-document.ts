import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadDocumentHandler = app.openapi(postUploadDocumentRoute, (c) => {
  throw new Error('Not implemented')
})
