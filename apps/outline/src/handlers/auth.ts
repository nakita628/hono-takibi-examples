import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthConfigRoute, postAuthDeleteRoute, postAuthInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
