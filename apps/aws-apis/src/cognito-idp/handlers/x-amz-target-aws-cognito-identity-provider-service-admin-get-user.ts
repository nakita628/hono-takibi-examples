import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminGetUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
