import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceSetLogDeliveryConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
