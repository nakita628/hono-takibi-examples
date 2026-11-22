import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteThesaurusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDeleteThesaurusHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteThesaurusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
