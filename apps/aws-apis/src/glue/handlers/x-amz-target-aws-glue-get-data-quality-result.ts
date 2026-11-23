import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetDataQualityResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetDataQualityResultHandler = app.openapi(
  postXAmzTargetAWSGlueGetDataQualityResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
