import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListUsersInGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
