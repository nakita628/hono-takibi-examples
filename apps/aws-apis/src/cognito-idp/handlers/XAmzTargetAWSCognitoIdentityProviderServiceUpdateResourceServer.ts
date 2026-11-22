import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
