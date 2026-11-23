import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceCreateAddressHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCreateAddressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
