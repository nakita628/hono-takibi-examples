import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceAssociateEntitiesToExperienceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
