import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
