import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceDescribeIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
