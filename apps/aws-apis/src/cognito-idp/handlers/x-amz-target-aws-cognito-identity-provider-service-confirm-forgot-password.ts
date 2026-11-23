import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceConfirmForgotPasswordHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
