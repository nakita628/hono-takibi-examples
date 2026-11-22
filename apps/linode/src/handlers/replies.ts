import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionSupportTicketsTicketIdRepliesRoute,
  postApiVersionSupportTicketsTicketIdRepliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repliesHandler = app
  .openapi(postApiVersionSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsTicketIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
