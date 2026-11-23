import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceCreateUserImportJobHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
