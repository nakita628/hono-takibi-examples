import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceUpdateAuthEventFeedbackHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
