import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthTicketsTicketIdRoute,
  postOauthTicketsRoute,
  postOauthTicketsTicketIdExchangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTicketsTicketIdExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
