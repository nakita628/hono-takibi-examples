import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDescribeIdentityProviderHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
