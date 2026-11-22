import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListExperiencesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListExperiencesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListExperiencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
