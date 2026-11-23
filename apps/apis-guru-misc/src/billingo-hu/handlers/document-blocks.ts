import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocumentBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const documentBlocksHandler = app.openapi(getDocumentBlocksRoute, (c) => {
  throw new Error('Not implemented')
})
