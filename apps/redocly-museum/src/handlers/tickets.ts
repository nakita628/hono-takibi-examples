import { OpenAPIHono } from '@hono/zod-openapi'
import { getTicketsTicketIdQrRoute, postTicketsRoute } from '../routes'

const app = new OpenAPIHono()

export const ticketsHandler = app
  .openapi(postTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTicketsTicketIdQrRoute, (c) => {
    throw new Error('Not implemented')
  })
