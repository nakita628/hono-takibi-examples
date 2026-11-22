import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
