import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteFaqRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDeleteFaqHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteFaqRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
