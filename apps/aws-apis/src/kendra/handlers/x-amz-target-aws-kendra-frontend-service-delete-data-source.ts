import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeleteDataSourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
