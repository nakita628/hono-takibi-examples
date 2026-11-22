import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthRevokeRoute, getAuthTestRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getAuthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthTestRoute, (c) => {
    throw new Error('Not implemented')
  })
