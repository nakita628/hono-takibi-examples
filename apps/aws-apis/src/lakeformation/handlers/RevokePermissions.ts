import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevokePermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const RevokePermissionsHandler = app.openapi(postRevokePermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
