import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceRespondToAuthChallengeHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
