import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthApiKeyRoute, postAuthRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postAuthApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
