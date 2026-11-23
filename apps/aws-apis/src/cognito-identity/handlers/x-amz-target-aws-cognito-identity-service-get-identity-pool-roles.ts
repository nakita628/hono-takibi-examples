import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceGetIdentityPoolRolesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
