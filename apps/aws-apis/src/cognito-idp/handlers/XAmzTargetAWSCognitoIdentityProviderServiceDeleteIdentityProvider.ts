import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
