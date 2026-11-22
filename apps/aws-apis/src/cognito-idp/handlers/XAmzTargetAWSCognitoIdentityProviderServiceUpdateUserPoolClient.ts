import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
