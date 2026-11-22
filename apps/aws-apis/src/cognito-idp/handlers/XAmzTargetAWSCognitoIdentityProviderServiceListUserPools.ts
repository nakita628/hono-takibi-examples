import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
