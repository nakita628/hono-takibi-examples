import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteLoadBalancerTlsCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
