import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
