import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDescribeResourceServerHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
