import { OpenAPIHono } from '@hono/zod-openapi'
import { getHubDocumentPagesRoute } from '../routes'

const app = new OpenAPIHono()

export const hubDocumentPagesHandler = app.openapi(getHubDocumentPagesRoute, (c) => {
  throw new Error('Not implemented')
})
