import { OpenAPIHono } from '@hono/zod-openapi'
import { getReceivedDocumentsGuidFormatRoute, postReceivedDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const receivedDocumentsHandler = app
  .openapi(postReceivedDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceivedDocumentsGuidFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
