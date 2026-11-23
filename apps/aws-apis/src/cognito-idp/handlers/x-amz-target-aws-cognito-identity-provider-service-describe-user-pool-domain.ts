import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDescribeUserPoolDomainHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
