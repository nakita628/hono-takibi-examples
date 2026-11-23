import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceGetCredentialsForIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
