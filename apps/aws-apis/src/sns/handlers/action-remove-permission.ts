import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRemovePermissionRoute, postActionRemovePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRemovePermissionHandler = app
  .openapi(getActionRemovePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemovePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
