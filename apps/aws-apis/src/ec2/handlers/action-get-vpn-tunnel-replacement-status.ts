import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetVpnTunnelReplacementStatusRoute,
  postActionGetVpnTunnelReplacementStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetVpnTunnelReplacementStatusHandler = app
  .openapi(getActionGetVpnTunnelReplacementStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetVpnTunnelReplacementStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
