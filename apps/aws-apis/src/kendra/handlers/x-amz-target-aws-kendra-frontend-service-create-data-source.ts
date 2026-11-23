import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceCreateDataSourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
