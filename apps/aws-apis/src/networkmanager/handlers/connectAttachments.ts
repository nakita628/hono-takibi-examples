import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectAttachmentsAttachmentIdRoute, postConnectAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const connectAttachmentsHandler = app
  .openapi(postConnectAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
