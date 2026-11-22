import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
