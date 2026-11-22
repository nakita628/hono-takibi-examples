import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteClientVpnRouteRoute, postActionDeleteClientVpnRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteClientVpnRouteHandler = app
  .openapi(getActionDeleteClientVpnRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClientVpnRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
