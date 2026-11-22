import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
