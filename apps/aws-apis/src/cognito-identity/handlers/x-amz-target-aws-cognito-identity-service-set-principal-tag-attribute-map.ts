import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceSetPrincipalTagAttributeMapHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
