import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceCreateUserPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
