import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
