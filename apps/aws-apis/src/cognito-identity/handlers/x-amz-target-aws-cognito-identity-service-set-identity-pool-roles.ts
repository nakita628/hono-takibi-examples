import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceSetIdentityPoolRolesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
