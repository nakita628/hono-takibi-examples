import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCreateLongTermPricingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
