import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
