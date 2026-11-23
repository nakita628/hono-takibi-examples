import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsRestoreHandler = app.openapi(postDocumentsRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
