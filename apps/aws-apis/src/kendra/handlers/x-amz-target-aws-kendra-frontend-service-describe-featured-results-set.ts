import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDescribeFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
