import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminListUserAuthEventsHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
