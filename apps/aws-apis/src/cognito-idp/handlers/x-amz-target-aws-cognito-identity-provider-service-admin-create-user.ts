import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminCreateUserHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
