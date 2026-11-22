import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DescribeEmergencyContactSettingsHandler = app.openapi(
  postXAmzTargetAWSShield20160616DescribeEmergencyContactSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
