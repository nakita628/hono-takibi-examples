import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceGetSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceGetSnapshotsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceGetSnapshotsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
