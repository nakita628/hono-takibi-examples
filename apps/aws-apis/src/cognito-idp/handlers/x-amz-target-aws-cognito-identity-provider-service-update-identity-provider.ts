import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceUpdateIdentityProviderHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
