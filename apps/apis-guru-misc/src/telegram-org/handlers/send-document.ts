import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const sendDocumentHandler = app.openapi(postSendDocumentRoute, (c) => {
  throw new Error('Not implemented')
})
