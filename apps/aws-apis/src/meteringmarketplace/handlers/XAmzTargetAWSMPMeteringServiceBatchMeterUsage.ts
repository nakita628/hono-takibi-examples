import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMPMeteringServiceBatchMeterUsageHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceBatchMeterUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
