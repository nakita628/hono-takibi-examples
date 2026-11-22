import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
