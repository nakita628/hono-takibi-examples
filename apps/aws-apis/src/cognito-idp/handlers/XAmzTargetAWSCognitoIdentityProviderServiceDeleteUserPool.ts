import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
