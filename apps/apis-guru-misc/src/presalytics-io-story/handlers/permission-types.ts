import { OpenAPIHono } from '@hono/zod-openapi'
import { getPermissionTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionTypesHandler = app.openapi(getPermissionTypesRoute, (c) => {
  throw new Error('Not implemented')
})
