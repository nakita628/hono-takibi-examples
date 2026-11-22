import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
