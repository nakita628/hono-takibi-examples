import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminUpdateDeviceStatusHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
