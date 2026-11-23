import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceChangePasswordHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
