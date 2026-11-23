import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetUiCustomizationHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
