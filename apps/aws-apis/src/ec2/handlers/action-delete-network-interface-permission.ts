import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInterfacePermissionRoute,
  postActionDeleteNetworkInterfacePermissionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNetworkInterfacePermissionHandler = app
  .openapi(getActionDeleteNetworkInterfacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInterfacePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
