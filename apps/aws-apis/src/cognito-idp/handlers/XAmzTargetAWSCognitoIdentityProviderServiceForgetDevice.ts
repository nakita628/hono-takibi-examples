import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
