import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceMergeDeveloperIdentitiesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
