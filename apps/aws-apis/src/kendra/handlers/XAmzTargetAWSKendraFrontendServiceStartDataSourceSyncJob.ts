import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceStartDataSourceSyncJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
