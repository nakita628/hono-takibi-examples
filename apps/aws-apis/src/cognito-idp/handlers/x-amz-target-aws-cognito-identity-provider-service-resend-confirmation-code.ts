import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceResendConfirmationCodeHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
