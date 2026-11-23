import { OpenAPIHono } from '@hono/zod-openapi'
import { postClientLogDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const clientLogHandler = app.openapi(postClientLogDocumentRoute, (c) => {
  throw new Error('Not implemented')
})
