import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceBatchDeleteFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceBatchDeleteFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
