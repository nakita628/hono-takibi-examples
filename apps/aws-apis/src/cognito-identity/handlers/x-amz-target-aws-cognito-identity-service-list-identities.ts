import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceListIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceListIdentitiesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceListIdentitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
