import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceDescribeAddressHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
