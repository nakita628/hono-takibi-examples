import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyVpnConnectionRoute, postActionModifyVpnConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVpnConnectionHandler = app
  .openapi(getActionModifyVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpnConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
