import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCreateJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceCreateJobHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCreateJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
