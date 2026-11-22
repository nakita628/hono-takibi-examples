import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
