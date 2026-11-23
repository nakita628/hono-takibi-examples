import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetLoadBalancerListenerSSLCertificateRoute,
  postActionSetLoadBalancerListenerSSLCertificateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetLoadBalancerListenerSslCertificateHandler = app
  .openapi(getActionSetLoadBalancerListenerSSLCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetLoadBalancerListenerSSLCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
