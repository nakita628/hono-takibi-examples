import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
