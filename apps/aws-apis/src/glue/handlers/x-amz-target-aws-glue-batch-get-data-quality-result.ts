import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetDataQualityResultRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetDataQualityResultHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetDataQualityResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
