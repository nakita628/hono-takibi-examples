import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
