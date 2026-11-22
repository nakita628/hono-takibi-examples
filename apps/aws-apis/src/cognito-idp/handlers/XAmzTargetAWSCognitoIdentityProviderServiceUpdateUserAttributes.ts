import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
