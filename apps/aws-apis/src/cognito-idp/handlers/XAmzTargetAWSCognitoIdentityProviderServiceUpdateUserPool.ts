import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
