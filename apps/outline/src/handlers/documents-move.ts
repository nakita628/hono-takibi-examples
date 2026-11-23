import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsMoveRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsMoveHandler = app.openapi(postDocumentsMoveRoute, (c) => {
  throw new Error('Not implemented')
})
