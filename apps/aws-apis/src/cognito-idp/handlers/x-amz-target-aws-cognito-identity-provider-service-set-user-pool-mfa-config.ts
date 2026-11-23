import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceSetUserPoolMfaConfigHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
