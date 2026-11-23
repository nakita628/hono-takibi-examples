import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceUpdateLongTermPricingHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
