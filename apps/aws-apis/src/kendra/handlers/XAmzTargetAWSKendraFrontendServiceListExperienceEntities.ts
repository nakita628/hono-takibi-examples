import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListExperienceEntitiesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListExperienceEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
