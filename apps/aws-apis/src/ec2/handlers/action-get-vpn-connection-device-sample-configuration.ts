import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetVpnConnectionDeviceSampleConfigurationRoute,
  postActionGetVpnConnectionDeviceSampleConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetVpnConnectionDeviceSampleConfigurationHandler = app
  .openapi(getActionGetVpnConnectionDeviceSampleConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetVpnConnectionDeviceSampleConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
