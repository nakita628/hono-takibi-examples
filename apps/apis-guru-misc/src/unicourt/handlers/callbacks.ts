import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallbacksRoute } from '../routes'

const app = new OpenAPIHono()

export const callbacksHandler = app.openapi(getCallbacksRoute, (c) => {
  throw new Error('Not implemented')
})
