import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceSubmitFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceSubmitFeedbackHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceSubmitFeedbackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
