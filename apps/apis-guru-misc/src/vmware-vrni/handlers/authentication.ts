import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAuthTokenRoute, postAuthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(deleteAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
