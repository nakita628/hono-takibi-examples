import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
