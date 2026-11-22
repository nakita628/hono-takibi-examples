import { OpenAPIHono } from '@hono/zod-openapi'
import { postGrantPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const GrantPermissionsHandler = app.openapi(postGrantPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
