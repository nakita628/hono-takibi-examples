import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceBatchGetDocumentStatusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchGetDocumentStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
