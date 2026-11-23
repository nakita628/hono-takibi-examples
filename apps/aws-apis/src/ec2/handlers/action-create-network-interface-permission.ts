import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateNetworkInterfacePermissionRoute,
  postActionCreateNetworkInterfacePermissionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateNetworkInterfacePermissionHandler = app
  .openapi(getActionCreateNetworkInterfacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNetworkInterfacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
