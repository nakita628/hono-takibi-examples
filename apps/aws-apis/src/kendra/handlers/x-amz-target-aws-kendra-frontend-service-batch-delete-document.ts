import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceBatchDeleteDocumentHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
