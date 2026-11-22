import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthTicketsTicketIdRoute, postOauthTicketsRoute } from '../routes'

const app = new OpenAPIHono()

export const ticketHandler = app
  .openapi(postOauthTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
