import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDeleteGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
