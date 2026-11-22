import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
