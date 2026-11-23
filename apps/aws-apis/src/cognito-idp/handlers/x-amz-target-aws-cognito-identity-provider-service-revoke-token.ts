import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceRevokeTokenHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
