import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminAddUserToGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
