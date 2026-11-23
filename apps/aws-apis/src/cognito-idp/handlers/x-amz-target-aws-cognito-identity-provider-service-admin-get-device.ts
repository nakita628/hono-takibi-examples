import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminGetDeviceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
