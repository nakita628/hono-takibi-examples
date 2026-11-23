import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateHandler = app.openapi(
  postXAmzTargetLightsail20161128AttachLoadBalancerTlsCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
