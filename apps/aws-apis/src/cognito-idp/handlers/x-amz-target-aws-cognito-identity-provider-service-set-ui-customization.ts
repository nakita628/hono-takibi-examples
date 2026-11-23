import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceSetUiCustomizationHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
