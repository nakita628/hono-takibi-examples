import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const callbackHandler = app.openapi(postCallbackRoute, (c) => {
  throw new Error('Not implemented')
})
