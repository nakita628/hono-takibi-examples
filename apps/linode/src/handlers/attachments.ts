import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiVersionSupportTicketsTicketIdAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const attachmentsHandler = app.openapi(
  postApiVersionSupportTicketsTicketIdAttachmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
