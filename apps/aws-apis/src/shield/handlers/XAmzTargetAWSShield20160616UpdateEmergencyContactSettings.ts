import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616UpdateEmergencyContactSettingsHandler = app.openapi(
  postXAmzTargetAWSShield20160616UpdateEmergencyContactSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
