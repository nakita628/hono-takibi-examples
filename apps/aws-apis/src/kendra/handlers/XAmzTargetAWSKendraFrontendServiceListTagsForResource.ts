import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
