import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceCancelJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceCancelJobHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceCancelJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
