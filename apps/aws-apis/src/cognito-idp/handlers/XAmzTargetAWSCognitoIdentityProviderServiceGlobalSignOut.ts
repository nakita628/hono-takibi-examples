import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
