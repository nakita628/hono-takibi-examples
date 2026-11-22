import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
