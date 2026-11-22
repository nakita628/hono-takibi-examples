import { OpenAPIHono } from '@hono/zod-openapi'
import { postSupportEchoRoute } from '../routes'

const app = new OpenAPIHono()

export const echoHandler = app.openapi(postSupportEchoRoute, (c) => {
  throw new Error('Not implemented')
})
