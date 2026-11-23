import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceListLongTermPricingHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
