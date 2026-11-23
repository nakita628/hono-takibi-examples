import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVpnConnectionRouteRoute,
  postActionCreateVpnConnectionRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateVpnConnectionRouteHandler = app
  .openapi(getActionCreateVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
