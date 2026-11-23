import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceListDevicesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
