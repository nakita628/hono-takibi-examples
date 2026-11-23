import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsExportRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsExportHandler = app.openapi(postDocumentsExportRoute, (c) => {
  throw new Error('Not implemented')
})
