import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
