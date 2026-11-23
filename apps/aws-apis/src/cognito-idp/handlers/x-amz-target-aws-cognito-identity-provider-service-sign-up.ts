import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
