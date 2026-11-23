import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceAssociateEntitiesToExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
