import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListThesauriRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListThesauriHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListThesauriRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
