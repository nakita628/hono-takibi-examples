import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
