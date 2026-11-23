import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVpnTunnelCertificateRoute,
  postActionModifyVpnTunnelCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVpnTunnelCertificateHandler = app
  .openapi(getActionModifyVpnTunnelCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVpnTunnelCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
