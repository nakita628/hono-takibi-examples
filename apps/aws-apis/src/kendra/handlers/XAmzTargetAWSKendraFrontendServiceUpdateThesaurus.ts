import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateThesaurusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateThesaurusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateThesaurusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
