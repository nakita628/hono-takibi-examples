import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
