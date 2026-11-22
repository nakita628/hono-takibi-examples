import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
