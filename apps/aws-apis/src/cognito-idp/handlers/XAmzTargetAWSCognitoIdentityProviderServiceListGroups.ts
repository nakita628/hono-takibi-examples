import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListGroupsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
