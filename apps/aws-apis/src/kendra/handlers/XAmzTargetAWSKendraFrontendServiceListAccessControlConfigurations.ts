import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListAccessControlConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
