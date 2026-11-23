import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminEnableUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
