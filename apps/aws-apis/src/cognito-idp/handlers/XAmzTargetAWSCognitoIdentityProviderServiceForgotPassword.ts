import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
