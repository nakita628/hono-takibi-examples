import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendToPosFailedRoute } from '../routes'

const app = new OpenAPIHono()

export const sendToPosFailedHandler = app.openapi(postSendToPosFailedRoute, (c) => {
  throw new Error('Not implemented')
})
