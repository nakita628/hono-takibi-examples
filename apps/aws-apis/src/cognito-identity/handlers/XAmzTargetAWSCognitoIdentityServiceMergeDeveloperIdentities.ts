import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
