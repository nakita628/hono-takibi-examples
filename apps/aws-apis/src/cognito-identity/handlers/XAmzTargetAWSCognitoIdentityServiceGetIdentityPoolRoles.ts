import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
