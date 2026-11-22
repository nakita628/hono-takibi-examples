import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionRemovePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRemovePermissionHandler = app.openapi(postActionRemovePermissionRoute, (c) => {
  throw new Error('Not implemented')
})
