import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
