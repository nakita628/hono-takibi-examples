import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVpnConnectionRouteRoute,
  postActionDeleteVpnConnectionRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteVpnConnectionRouteHandler = app
  .openapi(getActionDeleteVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
