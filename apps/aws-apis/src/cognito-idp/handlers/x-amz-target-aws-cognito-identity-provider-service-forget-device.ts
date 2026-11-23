import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceForgetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
