import { OpenAPIHono } from '@hono/zod-openapi'
import { getHubDocumentBlocksRoute, getHubDocumentPagesRoute } from '../routes'

const app = new OpenAPIHono()

export const boxHubDocumentHandler = app
  .openapi(getHubDocumentPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubDocumentBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
