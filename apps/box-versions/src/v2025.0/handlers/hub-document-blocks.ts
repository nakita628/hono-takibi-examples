import { OpenAPIHono } from '@hono/zod-openapi'
import { getHubDocumentBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const hubDocumentBlocksHandler = app.openapi(getHubDocumentBlocksRoute, (c) => {
  throw new Error('Not implemented')
})
