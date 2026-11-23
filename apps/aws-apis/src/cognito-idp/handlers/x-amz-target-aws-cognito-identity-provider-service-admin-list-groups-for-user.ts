import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminListGroupsForUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
