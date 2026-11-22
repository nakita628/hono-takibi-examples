import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
