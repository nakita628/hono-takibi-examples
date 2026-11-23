import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceInitiateAuthHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
