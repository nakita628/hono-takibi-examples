import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
