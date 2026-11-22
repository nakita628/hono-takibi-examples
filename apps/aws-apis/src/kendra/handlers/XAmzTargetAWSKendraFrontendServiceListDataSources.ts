import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListDataSourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListDataSourcesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListDataSourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
