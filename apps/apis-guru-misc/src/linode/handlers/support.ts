import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSupportTicketsRoute,
  getSupportTicketsTicketIdRepliesRoute,
  getSupportTicketsTicketIdRoute,
  postSupportTicketsRoute,
  postSupportTicketsTicketIdAttachmentsRoute,
  postSupportTicketsTicketIdCloseRoute,
  postSupportTicketsTicketIdRepliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app
  .openapi(getSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSupportTicketsTicketIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSupportTicketsTicketIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
