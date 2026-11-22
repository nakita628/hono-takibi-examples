import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
