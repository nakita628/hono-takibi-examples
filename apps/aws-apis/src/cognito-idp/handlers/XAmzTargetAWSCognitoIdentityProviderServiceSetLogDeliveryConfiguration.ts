import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
