import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
