import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceListIdentityPoolsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
