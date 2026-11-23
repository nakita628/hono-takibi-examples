import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetVpnConnectionDeviceTypesRoute,
  postActionGetVpnConnectionDeviceTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetVpnConnectionDeviceTypesHandler = app
  .openapi(getActionGetVpnConnectionDeviceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetVpnConnectionDeviceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
