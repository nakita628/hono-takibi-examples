import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceUpdateDeviceStatusHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
