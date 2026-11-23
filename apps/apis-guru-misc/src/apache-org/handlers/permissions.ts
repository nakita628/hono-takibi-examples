import { OpenAPIHono } from '@hono/zod-openapi'
import { getPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app.openapi(getPermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
