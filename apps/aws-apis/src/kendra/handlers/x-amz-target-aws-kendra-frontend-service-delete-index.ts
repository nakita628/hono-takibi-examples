import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeleteIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
