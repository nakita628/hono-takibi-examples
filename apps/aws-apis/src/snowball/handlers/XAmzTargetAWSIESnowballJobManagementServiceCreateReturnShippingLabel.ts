import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelHandler =
  app.openapi(
    postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
