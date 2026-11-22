import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceStopDataSourceSyncJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
