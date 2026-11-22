import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
