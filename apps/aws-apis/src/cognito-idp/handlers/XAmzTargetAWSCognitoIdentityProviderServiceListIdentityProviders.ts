import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
