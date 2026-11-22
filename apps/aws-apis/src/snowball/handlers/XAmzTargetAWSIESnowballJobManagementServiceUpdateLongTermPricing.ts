import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateLongTermPricingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
