import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceListClusterJobsHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListClusterJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
