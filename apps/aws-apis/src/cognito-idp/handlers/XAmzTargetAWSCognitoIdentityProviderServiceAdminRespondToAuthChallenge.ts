import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
