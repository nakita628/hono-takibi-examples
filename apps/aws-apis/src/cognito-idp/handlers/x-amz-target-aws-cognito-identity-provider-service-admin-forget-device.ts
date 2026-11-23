import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminForgetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
