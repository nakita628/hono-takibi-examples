import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeClientVpnIngressRoute,
  postActionRevokeClientVpnIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRevokeClientVpnIngressHandler = app
  .openapi(getActionRevokeClientVpnIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeClientVpnIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
