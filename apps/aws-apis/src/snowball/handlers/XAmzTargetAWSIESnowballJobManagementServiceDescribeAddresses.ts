import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceDescribeAddressesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
