import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionTerminateClientVpnConnectionsRoute,
  postActionTerminateClientVpnConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionTerminateClientVpnConnectionsHandler = app
  .openapi(getActionTerminateClientVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTerminateClientVpnConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
