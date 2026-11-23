import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsmpMeteringServiceResolveCustomerHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceResolveCustomerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
