import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
