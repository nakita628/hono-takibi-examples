import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceUpdateClusterHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
