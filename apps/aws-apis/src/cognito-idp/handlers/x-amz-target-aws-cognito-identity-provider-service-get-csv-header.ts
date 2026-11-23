import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetCsvHeaderHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
