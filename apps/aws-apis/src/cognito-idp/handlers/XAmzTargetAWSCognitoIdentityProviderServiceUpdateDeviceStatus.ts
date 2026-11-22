import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
