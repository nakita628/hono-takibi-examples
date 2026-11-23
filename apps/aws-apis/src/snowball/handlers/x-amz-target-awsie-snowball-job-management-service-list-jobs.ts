import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceListJobsHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
