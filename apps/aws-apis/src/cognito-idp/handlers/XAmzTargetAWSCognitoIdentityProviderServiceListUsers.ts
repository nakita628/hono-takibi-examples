import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListUsersHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
