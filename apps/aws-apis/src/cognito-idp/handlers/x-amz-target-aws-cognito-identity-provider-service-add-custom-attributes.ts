import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAddCustomAttributesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
