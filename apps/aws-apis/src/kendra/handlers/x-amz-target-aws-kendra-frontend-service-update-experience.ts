import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceUpdateExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
