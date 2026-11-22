import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
