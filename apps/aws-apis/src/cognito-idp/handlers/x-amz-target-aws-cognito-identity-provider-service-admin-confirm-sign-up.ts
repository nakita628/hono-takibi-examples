import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminConfirmSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
