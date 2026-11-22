import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionSupportTicketsRoute,
  getApiVersionSupportTicketsTicketIdRoute,
  postApiVersionSupportTicketsRoute,
  postApiVersionSupportTicketsTicketIdCloseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportTicketsHandler = app
  .openapi(postApiVersionSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionSupportTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionSupportTicketsTicketIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
