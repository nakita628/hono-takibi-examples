import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminRemoveUserFromGroupHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
