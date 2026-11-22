import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
