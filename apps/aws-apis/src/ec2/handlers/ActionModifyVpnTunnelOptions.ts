import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpnTunnelOptionsRoute,
  postActionModifyVpnTunnelOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpnTunnelOptionsHandler = app
  .openapi(getActionModifyVpnTunnelOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpnTunnelOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
