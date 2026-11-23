import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsDuplicateRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsDuplicateHandler = app.openapi(postDocumentsDuplicateRoute, (c) => {
  throw new Error('Not implemented')
})
