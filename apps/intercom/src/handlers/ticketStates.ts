import { OpenAPIHono } from '@hono/zod-openapi'
import { getTicketStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const ticketStatesHandler = app.openapi(getTicketStatesRoute, (c) => {
  throw new Error('Not implemented')
})
