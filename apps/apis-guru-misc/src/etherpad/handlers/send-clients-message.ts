import { OpenAPIHono } from '@hono/zod-openapi'
import { getSendClientsMessageRoute, postSendClientsMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const sendClientsMessageHandler = app
  .openapi(getSendClientsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendClientsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
