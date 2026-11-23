import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListDataSourceSyncJobsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
