import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthorizeRoute, getCallbackRoute, postCallbackRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientHandler = app
  .openapi(getAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
