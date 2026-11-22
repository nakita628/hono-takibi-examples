import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceUpdateJobHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceUpdateJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
