import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceTagResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
