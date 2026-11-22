import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeFeaturedResultsSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
