import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceStopDataSourceSyncJobHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
