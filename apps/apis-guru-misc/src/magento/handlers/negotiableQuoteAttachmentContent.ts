import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NegotiableQuoteAttachmentContentRoute } from '../routes'

const app = new OpenAPIHono()

export const negotiableQuoteAttachmentContentHandler = app.openapi(
  getV1NegotiableQuoteAttachmentContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
