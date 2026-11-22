import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
