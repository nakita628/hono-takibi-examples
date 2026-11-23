import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteVpnConnectionRoute, postActionDeleteVpnConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVpnConnectionHandler = app
  .openapi(getActionDeleteVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
