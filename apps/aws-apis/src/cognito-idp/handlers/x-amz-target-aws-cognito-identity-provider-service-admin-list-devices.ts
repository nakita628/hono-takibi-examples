import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminListDevicesHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
