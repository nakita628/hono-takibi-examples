import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDeleteUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
