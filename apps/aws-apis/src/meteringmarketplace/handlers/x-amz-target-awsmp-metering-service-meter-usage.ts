import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceMeterUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsmpMeteringServiceMeterUsageHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceMeterUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
