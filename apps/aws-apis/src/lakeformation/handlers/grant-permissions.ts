import { OpenAPIHono } from '@hono/zod-openapi'
import { postGrantPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const grantPermissionsHandler = app.openapi(postGrantPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
