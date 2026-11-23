import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsImportRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsImportHandler = app.openapi(postDocumentsImportRoute, (c) => {
  throw new Error('Not implemented')
})
