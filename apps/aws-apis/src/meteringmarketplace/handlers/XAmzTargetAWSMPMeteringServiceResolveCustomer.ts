import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMPMeteringServiceResolveCustomerHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
