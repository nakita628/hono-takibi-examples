import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeleteExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
