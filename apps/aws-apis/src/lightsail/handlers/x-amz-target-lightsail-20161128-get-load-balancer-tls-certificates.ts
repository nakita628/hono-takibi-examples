import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetLoadBalancerTlsCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
