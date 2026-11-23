import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListFeaturedResultsSetsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListFeaturedResultsSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
