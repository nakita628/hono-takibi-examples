import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsArchivedRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsArchivedHandler = app.openapi(postDocumentsArchivedRoute, (c) => {
  throw new Error('Not implemented')
})
