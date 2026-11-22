import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallbacksRoute } from '../routes'

const app = new OpenAPIHono()

export const callbackAPIHandler = app.openapi(getCallbacksRoute, (c) => {
  throw new Error('Not implemented')
})
