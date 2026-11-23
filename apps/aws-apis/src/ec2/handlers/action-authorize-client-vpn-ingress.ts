import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeClientVpnIngressRoute,
  postActionAuthorizeClientVpnIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAuthorizeClientVpnIngressHandler = app
  .openapi(getActionAuthorizeClientVpnIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeClientVpnIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
