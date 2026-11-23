import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsDraftsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsDraftsHandler = app.openapi(postDocumentsDraftsRoute, (c) => {
  throw new Error('Not implemented')
})
