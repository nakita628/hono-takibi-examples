import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVpnConnectionRouteRoute,
  postActionDeleteVpnConnectionRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpnConnectionRouteHandler = app
  .openapi(getActionDeleteVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpnConnectionRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
