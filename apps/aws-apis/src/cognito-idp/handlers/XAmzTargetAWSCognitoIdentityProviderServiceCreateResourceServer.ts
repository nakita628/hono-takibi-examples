import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
