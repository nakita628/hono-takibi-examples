import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceUnlinkIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
