import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
