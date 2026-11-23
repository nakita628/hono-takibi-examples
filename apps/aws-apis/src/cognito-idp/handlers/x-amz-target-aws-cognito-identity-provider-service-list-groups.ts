import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListGroupsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
