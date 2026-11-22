import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1QuotesDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const quotesDocumentHandler = app.openapi(postV1QuotesDocumentRoute, (c) => {
  throw new Error('Not implemented')
})
