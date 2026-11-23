import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminResetUserPasswordHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
