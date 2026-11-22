import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
