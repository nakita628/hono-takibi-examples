import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
