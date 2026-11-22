import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateClientVpnRouteRoute, postActionCreateClientVpnRouteRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateClientVpnRouteHandler = app
  .openapi(getActionCreateClientVpnRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClientVpnRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
