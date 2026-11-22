import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
