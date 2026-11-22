import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
