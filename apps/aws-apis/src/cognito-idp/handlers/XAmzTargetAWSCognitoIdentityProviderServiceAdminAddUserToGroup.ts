import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
