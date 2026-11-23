import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceVerifySoftwareTokenHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
