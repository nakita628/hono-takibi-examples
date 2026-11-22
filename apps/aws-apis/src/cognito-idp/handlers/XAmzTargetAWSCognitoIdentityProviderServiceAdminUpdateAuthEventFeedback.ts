import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
