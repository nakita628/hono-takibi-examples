import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
