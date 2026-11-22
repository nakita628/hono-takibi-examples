import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
