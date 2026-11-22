import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthTicketsTicketIdExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const accessTokenHandler = app.openapi(postOauthTicketsTicketIdExchangeRoute, (c) => {
  throw new Error('Not implemented')
})
