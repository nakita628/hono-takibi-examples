import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceCreateDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceCreateDataSourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceCreateDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
