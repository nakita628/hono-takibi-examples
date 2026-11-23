import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceUpdateIdentityPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
