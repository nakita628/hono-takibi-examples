import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
