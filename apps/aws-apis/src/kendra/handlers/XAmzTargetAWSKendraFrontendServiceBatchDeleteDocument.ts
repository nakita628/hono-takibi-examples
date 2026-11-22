import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchDeleteDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
