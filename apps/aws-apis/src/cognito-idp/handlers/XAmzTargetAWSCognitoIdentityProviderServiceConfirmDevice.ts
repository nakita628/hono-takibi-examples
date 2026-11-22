import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
