import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendpasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const sendpasswordHandler = app.openapi(postSendpasswordRoute, (c) => {
  throw new Error('Not implemented')
})
