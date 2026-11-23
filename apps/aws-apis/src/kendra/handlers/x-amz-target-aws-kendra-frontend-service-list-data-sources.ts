import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListDataSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceListDataSourcesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListDataSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
