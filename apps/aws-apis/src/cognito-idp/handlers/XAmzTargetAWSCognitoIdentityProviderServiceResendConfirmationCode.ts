import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
