import { OpenAPIHono } from '@hono/zod-openapi'
import { getSslRoute, putSslRoute } from '../routes'

const app = new OpenAPIHono()

export const sslHandler = app
  .openapi(getSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSslRoute, (c) => {
    throw new Error('Not implemented')
  })
