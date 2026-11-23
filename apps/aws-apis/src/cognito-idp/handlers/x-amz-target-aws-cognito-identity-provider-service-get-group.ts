import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
