import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelImageLaunchPermissionRoute,
  postActionCancelImageLaunchPermissionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCancelImageLaunchPermissionHandler = app
  .openapi(getActionCancelImageLaunchPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelImageLaunchPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
