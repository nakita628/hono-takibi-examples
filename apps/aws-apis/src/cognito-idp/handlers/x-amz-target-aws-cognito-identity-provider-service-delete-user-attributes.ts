import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDeleteUserAttributesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
