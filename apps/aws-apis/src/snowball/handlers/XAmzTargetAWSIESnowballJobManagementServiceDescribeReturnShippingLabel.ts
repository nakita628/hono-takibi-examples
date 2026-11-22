import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelHandler =
  app.openapi(
    postXAmzTargetAWSIESnowballJobManagementServiceDescribeReturnShippingLabelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
