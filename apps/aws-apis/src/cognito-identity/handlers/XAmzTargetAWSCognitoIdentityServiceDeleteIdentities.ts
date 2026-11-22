import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
