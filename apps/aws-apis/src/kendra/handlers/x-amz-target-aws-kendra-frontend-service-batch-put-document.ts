import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchPutDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceBatchPutDocumentHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchPutDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
