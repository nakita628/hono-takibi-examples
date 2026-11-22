import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
