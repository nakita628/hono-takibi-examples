import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
