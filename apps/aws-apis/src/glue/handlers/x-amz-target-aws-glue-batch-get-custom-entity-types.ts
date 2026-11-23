import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetCustomEntityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetCustomEntityTypesHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetCustomEntityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
