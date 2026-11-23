import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendVideoRoute } from '../routes'

const app = new OpenAPIHono()

export const sendVideoHandler = app.openapi(postSendVideoRoute, (c) => {
  throw new Error('Not implemented')
})
