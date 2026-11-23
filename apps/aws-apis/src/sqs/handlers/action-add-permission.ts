import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionAddPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAddPermissionHandler = app.openapi(postActionAddPermissionRoute, (c) => {
  throw new Error('Not implemented')
})
