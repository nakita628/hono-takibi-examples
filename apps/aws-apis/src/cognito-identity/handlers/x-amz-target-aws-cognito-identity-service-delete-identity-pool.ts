import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceDeleteIdentityPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
