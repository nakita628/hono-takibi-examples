import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminInitiateAuthHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
