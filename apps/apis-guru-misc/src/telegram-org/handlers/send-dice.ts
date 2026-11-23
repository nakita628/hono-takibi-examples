import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendDiceRoute } from '../routes'

const app = new OpenAPIHono()

export const sendDiceHandler = app.openapi(postSendDiceRoute, (c) => {
  throw new Error('Not implemented')
})
