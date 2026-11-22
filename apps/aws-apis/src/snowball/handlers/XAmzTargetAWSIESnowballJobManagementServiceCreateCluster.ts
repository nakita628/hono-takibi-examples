import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceCreateClusterHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCreateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
