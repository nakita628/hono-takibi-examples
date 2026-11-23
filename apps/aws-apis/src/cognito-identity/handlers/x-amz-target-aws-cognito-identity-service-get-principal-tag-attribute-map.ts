import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceGetPrincipalTagAttributeMapHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
