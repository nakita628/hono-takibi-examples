import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceConfirmSignUpHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
