import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
