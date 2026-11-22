import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateGroupHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
