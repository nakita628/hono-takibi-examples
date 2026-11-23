import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListThesauriRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListThesauriHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListThesauriRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
