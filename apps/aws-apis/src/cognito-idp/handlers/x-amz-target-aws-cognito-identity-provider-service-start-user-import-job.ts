import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceStartUserImportJobHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
