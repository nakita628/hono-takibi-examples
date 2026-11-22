import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListLongTermPricingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
