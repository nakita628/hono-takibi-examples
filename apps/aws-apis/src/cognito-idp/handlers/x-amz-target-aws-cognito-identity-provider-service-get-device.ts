import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
