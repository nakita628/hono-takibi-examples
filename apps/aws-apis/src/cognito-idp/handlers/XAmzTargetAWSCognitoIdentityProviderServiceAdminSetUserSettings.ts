import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
