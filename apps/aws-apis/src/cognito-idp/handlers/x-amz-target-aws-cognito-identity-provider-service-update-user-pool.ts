import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceUpdateUserPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
