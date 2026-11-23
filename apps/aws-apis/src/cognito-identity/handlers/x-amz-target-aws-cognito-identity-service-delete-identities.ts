import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceDeleteIdentitiesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
