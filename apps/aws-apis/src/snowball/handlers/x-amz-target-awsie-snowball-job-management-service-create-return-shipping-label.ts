import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceCreateReturnShippingLabelHandler =
  app.openapi(
    postXAmzTargetAWSIESnowballJobManagementServiceCreateReturnShippingLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
