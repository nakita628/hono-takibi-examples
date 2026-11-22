import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddPermissionRoute, postActionAddPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddPermissionHandler = app
  .openapi(getActionAddPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
