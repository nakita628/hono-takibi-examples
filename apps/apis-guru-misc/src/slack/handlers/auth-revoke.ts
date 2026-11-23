import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthRevokeRoute } from '../routes'

const app = new OpenAPIHono()

export const authRevokeHandler = app.openapi(getAuthRevokeRoute, (c) => {
  throw new Error('Not implemented')
})
