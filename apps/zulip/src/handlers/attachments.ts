import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAttachmentsAttachmentIdRoute, getAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app
  .openapi(getAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
