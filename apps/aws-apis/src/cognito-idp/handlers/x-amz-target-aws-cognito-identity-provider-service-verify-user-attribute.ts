import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceVerifyUserAttributeHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
