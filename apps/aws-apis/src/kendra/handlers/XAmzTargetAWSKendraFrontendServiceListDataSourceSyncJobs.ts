import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListDataSourceSyncJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
