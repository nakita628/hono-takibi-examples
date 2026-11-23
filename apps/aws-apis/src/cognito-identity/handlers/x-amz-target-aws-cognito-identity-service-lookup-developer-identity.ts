import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceLookupDeveloperIdentityHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
