import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateVpnConnectionRoute, postActionCreateVpnConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateVpnConnectionHandler = app
  .openapi(getActionCreateVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
