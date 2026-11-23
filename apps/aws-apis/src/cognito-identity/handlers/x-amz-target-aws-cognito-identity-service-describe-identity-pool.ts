import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceDescribeIdentityPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
