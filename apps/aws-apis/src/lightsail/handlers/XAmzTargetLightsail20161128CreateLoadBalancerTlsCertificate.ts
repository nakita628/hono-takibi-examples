import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateLoadBalancerTlsCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
