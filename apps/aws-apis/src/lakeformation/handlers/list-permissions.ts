import { OpenAPIHono } from '@hono/zod-openapi'
import { postListPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listPermissionsHandler = app.openapi(postListPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
