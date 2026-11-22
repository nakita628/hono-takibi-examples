import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceGetSnowballUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
