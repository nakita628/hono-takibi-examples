import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
