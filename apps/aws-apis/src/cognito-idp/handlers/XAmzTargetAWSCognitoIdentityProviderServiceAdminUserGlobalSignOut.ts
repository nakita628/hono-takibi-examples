import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
