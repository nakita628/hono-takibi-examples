import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetUserPoolMfaConfigHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
