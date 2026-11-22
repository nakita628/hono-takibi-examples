import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceListIdentityPoolsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
