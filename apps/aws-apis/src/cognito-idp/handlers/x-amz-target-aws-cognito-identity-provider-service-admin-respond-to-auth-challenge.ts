import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminRespondToAuthChallengeHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
