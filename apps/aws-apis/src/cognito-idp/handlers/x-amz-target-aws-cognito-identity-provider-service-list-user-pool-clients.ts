import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListUserPoolClientsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
