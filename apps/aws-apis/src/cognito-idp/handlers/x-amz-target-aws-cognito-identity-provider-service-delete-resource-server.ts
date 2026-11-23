import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDeleteResourceServerHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
