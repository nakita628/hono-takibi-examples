import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
