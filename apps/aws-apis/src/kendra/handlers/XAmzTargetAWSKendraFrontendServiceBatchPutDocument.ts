import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchPutDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceBatchPutDocumentHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchPutDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
