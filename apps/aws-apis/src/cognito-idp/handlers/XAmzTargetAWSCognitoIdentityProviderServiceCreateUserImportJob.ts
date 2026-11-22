import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
