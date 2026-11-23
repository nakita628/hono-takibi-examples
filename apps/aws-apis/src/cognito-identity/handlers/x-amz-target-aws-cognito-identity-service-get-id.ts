import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityServiceGetIdHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityServiceGetIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
