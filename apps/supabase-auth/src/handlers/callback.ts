import { OpenAPIHono } from '@hono/zod-openapi'
import { getCallbackRoute, postCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const callbackHandler = app
  .openapi(getCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
