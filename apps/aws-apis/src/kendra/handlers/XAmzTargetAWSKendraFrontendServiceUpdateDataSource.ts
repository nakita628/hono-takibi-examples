import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceUpdateDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceUpdateDataSourceHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceUpdateDataSourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
