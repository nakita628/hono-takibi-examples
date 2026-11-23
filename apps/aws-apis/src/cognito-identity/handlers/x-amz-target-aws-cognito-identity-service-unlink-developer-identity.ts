import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceUnlinkDeveloperIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
