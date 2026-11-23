import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsmpMeteringServiceBatchMeterUsageHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
