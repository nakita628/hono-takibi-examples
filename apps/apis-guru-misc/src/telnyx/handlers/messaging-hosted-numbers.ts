import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMessagingHostedNumbersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const messagingHostedNumbersHandler = app.openapi(
  deleteMessagingHostedNumbersIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
