import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
