import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListResourceServersHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
