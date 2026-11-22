import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
